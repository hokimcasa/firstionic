import { Component } from '@angular/core';

import { NavController , NavParams } from 'ionic-angular';



@Component({
  selector: 'page-test-detail',
  templateUrl: 'test-detail.html'
})
export class TestDetailsPage {
  selectedTestItem: any;

  constructor(public navCtrl:NavController,public navParams: NavParams) {
      this.selectedTestItem = navParams.get('testItem');
  }
}
