import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'Ratehistory/:id',
    loadChildren: './ratehistory/ratehistory.module#RatehistoryPageModule'
  },
  {
    path: 'AccountDetails',
    loadChildren: './account-details/account-details.module#AccountDetailsPageModule'
  },
  {
    path: 'AccountDetails', 
    loadChildren: './account-details/account-details.module#AccountDetailsPageModule' 
  },
  { 
    path: 'BuySell', 
    loadChildren: './buy-sell/buy-sell.module#BuySellPageModule' 
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
