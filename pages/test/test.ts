import { Component } from '@angular/core';

import { NavController,NavParams} from 'ionic-angular';

import { TestDetailsPage } from '../test-detail/test-detail';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
  icons : string[];
  testItems : Array<{title:string, note :string,icon:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask','wifi','beer','football','basketball','paper-plane',
                  'american-football','boat','bluetooth','bulid'];
    this.testItems = [];
    for(let i = 1; i<11;i++){
      this.testItems.push({
        title : 'TestItem '+i,
        note : ''+i,
        icon :this.icons[i]
      });
    }    
  }

  testItemTapped(event,testItem){
    this.navCtrl.push(TestDetailsPage,{
      testItem:testItem
    });
  }


}
