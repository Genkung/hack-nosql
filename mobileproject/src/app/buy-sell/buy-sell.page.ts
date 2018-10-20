import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ListPage} from '../list/list.page';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.page.html',
  styleUrls: ['./buy-sell.page.scss'],
})
export class BuySellPage implements OnInit {

  coint:CoinPrice[] = [];

  constructor(public alertController: AlertController, public modalController: ModalController)
   {
    this.coint = 
    [
      {
        _id:"1",name:"BTC",buy:20.5,sell:60.3
      },
      {
        _id:"2",name:"THB",buy:80.36,sell:98.30
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
            console.log('Confirm Ok'+item.name);
          }
        }
      ]
    });
    await alert.present();
  }
  async Sell(item:CoinPrice) {
    const alert = await this.alertController.create({
      header: 'Sell',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Insert money to sell'
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
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ListPage,
    });
    return await modal.present();
  }
}

export class CoinPrice{
  _id:string
  name:string
  buy:number
  sell:number  
}