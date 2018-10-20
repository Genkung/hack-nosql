import { Component, OnInit } from '@angular/core';
import { GlobalVarible} from '../models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss'],
})
export class AccountDetailsPage implements OnInit {
  
  Account_username:any;
  Account_Coins_data:any=[]
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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  ionViewDidEnter()
  {
    this.GetUser();
  }
  GetUser()
  {
    this.http.get<any>(GlobalVarible.host + "/api/hack/"+GlobalVarible.UserName)
    .subscribe(data => {
      this.Account_Coins_data = data.coins;
      this.Account_username = data.username;
      this.balance = data.balance;
    });
  }
}
