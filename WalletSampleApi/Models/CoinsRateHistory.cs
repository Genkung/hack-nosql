using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WalletSampleApi.Models
{
    public class CoinRateHistory
    {
        public string _id { get; set; }
        public string CoinId { get; set; }
        public string CoinSymbol { get; set; }
        public double BuyRate { get; set; }
        public bool IsPossitiveBuyRate { get; set; }
        public double SellRate { get; set; }
        public bool IsPossitiveSellRate { get; set; }
        public DateTime UpdateDateTime { get; set; }
    }
}
