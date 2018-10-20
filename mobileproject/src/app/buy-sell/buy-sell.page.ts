import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController,NavController } from '@ionic/angular';
import { NavigationExtras, Router, UrlTree } from '@angular/router';
import { ListPage} from '../list/list.page';
import { url } from 'inspector';
import { GlobalVarible} from '../models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.page.html',
  styleUrls: ['./buy-sell.page.scss'],
})
export class BuySellPage implements OnInit {

  coint:any[] = [];

  constructor(public alertController: AlertController, public modalController: ModalController, private router: Router, private http: HttpClient)
   {
    }

  ngOnInit() {

  }
  ionViewDidEnter()
  {
    this.GetBuySell();
  }

  GetBuySell()
  {
    this.http.get<any>(GlobalVarible.host + "/api/hack")
    .subscribe(data => {
      this.coint = data;
    });
  }

  BuyCoin(symbol:string,amount:number)
  {
    this.http.get<any>(GlobalVarible.host + "/api/hack/buycoin/"+GlobalVarible.UserName+"/"+symbol+"/"+amount)
    .subscribe(data => {
      this.coint = data;
    });
  }

  async Buy(item:any) {
    const alert = await this.alertController.create({
      header: 'Buy',
      inputs: [
        {
          name: 'buyAmount',
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
          handler: data => {
            this.BuyCoin(item.symbol,data.buyAmount);
          }
        }
      ]
    });
    await alert.present();
  }
  async Sell(item:any) {
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

          }
        }
      ]
    });
    await alert.present();
  }
  async openRateHistory(item:any) {
    this.router.navigate(['/Ratehistory/'+item.symbol]);
  }
}