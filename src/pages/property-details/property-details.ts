import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PropertyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-property-details',
  templateUrl: 'property-details.html',
})
export class PropertyDetailsPage {
  object: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.object = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyDetailsPage');
  }
}
