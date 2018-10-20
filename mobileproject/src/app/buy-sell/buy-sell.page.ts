import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController,NavController } from '@ionic/angular';
import { NavigationExtras, Router, UrlTree } from '@angular/router';
import { ListPage} from '../list/list.page';
import { url } from 'inspector';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.page.html',
  styleUrls: ['./buy-sell.page.scss'],
})
export class BuySellPage implements OnInit {

  coint:CoinPrice[] = [];

  constructor(public alertController: AlertController, public modalController: ModalController, private router: Router)
   {
    this.coint = 
    [
      {
        _id:"1",symbol:"BTC",buy:20.5,sell:60.3
      },
      {
        _id:"2",symbol:"THB",buy:80.36,sell:98.30
      },
    ];

    }

  ngOnInit() {

  }
  async Buy(item:CoinPrice) {
    const alert = await this.alertController.create({
      header: 'Buy',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Insert money to buy'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok'+item.symbol);
          }
        }
      ]
    });
    await alert.present();
  }
  async Sell(item:CoinPrice) {
    const alert = await this.alertController.create({
      header: 'Sell',
      message: 'ขาย Coin ทั้งหมดที่มี',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'ตกลง',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }
  async openRateHistory(item:CoinPrice) {
    this.router.navigate(['/Ratehistory/'+item.symbol]);
  }
}

export class CoinPrice{
  _id:string
  symbol:string
  buy:number
  sell:number  
}