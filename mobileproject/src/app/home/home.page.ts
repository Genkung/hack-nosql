import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalVarible} from '../models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username:string;

  constructor(public navCtrl: NavController, private http: HttpClient) {
  }

  GotoAccoutDetails(){
    this.http.get<any>(GlobalVarible.host + "/api/hack/"+this.username)
    .subscribe(data => {
      this.navCtrl.navigateForward("AccountDetails");
      GlobalVarible.UserName = this.username;
      console.log('username is '+ this.username);
    });
  }
}
