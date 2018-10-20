using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using WalletSampleApi.Models;

namespace WalletSampleApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HackController : ControllerBase
    {
        private MongoClient client;
        private IMongoDatabase database;
        private IMongoCollection<CustomerWallet> customerWalletCollection;
        private IMongoCollection<CustomerCoin> customerCoinCollection;
        private IMongoCollection<CoinRateHistory> coinRateHistoryCollection;
        private IMongoCollection<CoinPrice> coinPriceCollection;

        public HackController()
        {
            client = new MongoClient($"mongodb://admin:admin1234@ds016138.mlab.com:16138/cointrade");
            database = client.GetDatabase("cointrade");
            customerWalletCollection = database.GetCollection<CustomerWallet>("customerwallet");
            customerCoinCollection = database.GetCollection<CustomerCoin>("customercoin");
            coinRateHistoryCollection = database.GetCollection<CoinRateHistory>("coinsratehistory");
            coinPriceCollection = database.GetCollection<CoinPrice>("coinprice");
        }

        // GET api/values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CoinPrice>>> Get()
        {
            var result = await coinPriceCollection.Find(x => true).ToListAsync();
            return result;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerWallet>> Get(string id)
        {
            //TODO: Check existing user            
            var user = await customerWalletCollection.Find(x => x.Username == id).FirstOrDefaultAsync();
            if (user == null)
            {
                //register new user
                user = new CustomerWallet{ Username = id, Balance = 0, Coins = new List<CustomerCoin>() };
                customerWalletCollection.InsertOne(user);
            }

            return user;
            // return new CustomerWallet
            // {
            //     Username = "jdoe",
            //     Coins = new List<CustomerCoin>
            //     {
            //         new CustomerCoin
            //         {
            //             Symbol = "BTC",
            //             BuyingRate = 6565.25,
            //             BuyingAt = new DateTime(2018, 10, 9, 9, 32, 23),
            //             USDValue = 6500
            //         },
            //         new CustomerCoin
            //         {
            //             Symbol = "ETH",
            //             BuyingRate = 203.47,
            //             BuyingAt = new DateTime(2018, 9, 7, 12, 38, 33),
            //             USDValue = 200.23
            //         },
            //     },
            // };
        }        

        // POST api/values
        [HttpPost]
        public void Post([FromBody] CoinPriceUpdate updateCoin)
        {
            List<CoinRateHistory> updateCoins = new List<CoinRateHistory>();
            foreach (var item in updateCoin.PriceList)
            {
                //update history
                var coins = coinRateHistoryCollection.Find(x => x.CoinSymbol == item.Symbol).ToListAsync().Result;
                var latestUpdate = coins.OrderByDescending(x => x.UpdateDateTime).FirstOrDefault();
                updateCoins.Add(new CoinRateHistory
                {
                    _id = Guid.NewGuid().ToString(),
                    CoinSymbol = item.Symbol,
                    BuyRate = item.Buy,
                    IsPossitiveBuyRate = item.Buy > latestUpdate?.BuyRate || latestUpdate == null ? true : false,//compare rate                
                    SellRate = item.Sell,
                    IsPossitiveSellRate = item.Sell > latestUpdate?.SellRate || latestUpdate == null ? true : false,//compare rate                
                    UpdateDateTime = updateCoin.At
                });

                //update coinprice
                // var update = Builders<CoinPrice>.Update
                // .Set(it => it.Buy, item.Buy)
                // .Set(it => it.Sell, item.Sell);
                item._id = Guid.NewGuid().ToString();
                coinPriceCollection.ReplaceOne(x => x.Symbol == item.Symbol, item, new UpdateOptions{ IsUpsert = true });
            }
            coinRateHistoryCollection.InsertMany(updateCoins);
        }
    }
}
