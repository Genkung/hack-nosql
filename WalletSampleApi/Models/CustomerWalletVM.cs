using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WalletSampleApi.Models
{
    public class CustomerWalletVM
    {
        public string Username { get; set; }
        public List<CustomerCoinVM> Coins { get; set; }
    }

    public class CustomerCoinVM
    {
        public string Symbol { get; set; }
        public double Quantity { get; set; }
        public double TotalAmount { get; set; }
    }
}
