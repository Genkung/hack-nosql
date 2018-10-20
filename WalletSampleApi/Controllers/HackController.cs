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
        private IMongoCollection<CustomerWallet> customerWalletcollection;
        private IMongoCollection<CustomerCoin> customerCoincollection;

        public HackController()
        {
            client = new MongoClient("mongodb://localhost:27017");
            database = client.GetDatabase("foo");
            customerWalletcollection = database.GetCollection<CustomerWallet>("customerwallet");
            customerCoincollection = database.GetCollection<CustomerCoin>("customercoin");
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "jdoe", "ptparker" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerWallet>> Get(string id)
        {
            //TODO: Check existing user            
            var user = await customerWalletcollection.Find(x => x.Username == id).FirstOrDefaultAsync();
            if (user == null)
            {
                //TODO: register new user
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
        }
    }
}
