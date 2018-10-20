import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ratehistory',
  templateUrl: './ratehistory.page.html',
  styleUrls: ['./ratehistory.page.scss'],
})
export class RatehistoryPage implements OnInit {

  constructor(private route: ActivatedRoute, private nav: NavController) { 
    console.log("Id is "+ this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }
  goBack()
  {
    this.nav.goBack();
  }

}
