import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.page.html',
  styleUrls: ['./buy-sell.page.scss'],
})
export class BuySellPage implements OnInit {

  constructor(public alertController: AlertController, public modalController: ModalController) { }

  ngOnInit() {
  }
  async Buy() {
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
          handler: () => {
            console.log('Confirm Cancel');
          }
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
  async Sell() {
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
          handler: () => {
            console.log('Confirm Cancel');
          }
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
}
