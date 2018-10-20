import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss'],
})
export class AccountDetailsPage implements OnInit {
  
  Account_data:any={Username :"John smith",Coins:[],Balance:400.0};
  Account_Coins_data:any=[{Symbol:"BTH",Quantity:80.5,TotalAmount:"700"},
                          {Symbol:"BTC",Quantity:81.5,TotalAmount:"800"},
                          {Symbol:"BT",Quantity:82.5,TotalAmount:"900"}];
  balance=0.0;
    // Account_Data:any=[{
    //     _id:"1",
    //     symbol:"BTC",
    //     buy:20.5,
    //     sell:60.3
    //   },
    //   {
    //     _id:"2",
    //     symbol:"THB",
    //     buy:80.36,
    //     sell:98.30
    //   },
    // ];

  constructor() { }

  ngOnInit() {
  }

}
