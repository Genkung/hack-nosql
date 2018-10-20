import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GlobalVarible} from '../models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ratehistory',
  templateUrl: './ratehistory.page.html',
  styleUrls: ['./ratehistory.page.scss'],
})
export class RatehistoryPage implements OnInit {

  history:any =[];
  sym:string = "";
  constructor(private route: ActivatedRoute, private nav: NavController, private http: HttpClient) { 
    this.sym=this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }
  ionViewDidEnter()
  {
    this.GetHis();
  }

  GetHis()
  {
    this.http.get<any>(GlobalVarible.host + "/api/Hack/GetCoinRateHistory/"+ this.sym)
    .subscribe(data => {
      this.history = data;
    });
  }
  goBack()
  {
    this.nav.goBack();
  }

}
