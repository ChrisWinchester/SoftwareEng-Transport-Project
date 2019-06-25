import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DirectionsPage} from "../directions/directions";

declare var google;
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

data = [];
MyLocation: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public AlertCtrl: AlertController
  ) {

    this.data = this.navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    console.log(this.data);
    console.log(this.data.length);

  }
  getLocation(){
    const alert = this.AlertCtrl.create({
      title:'out of service',
      subTitle:'Android.googlmaps.services(args);',
      buttons:['OK']
    });
    alert.present();
   // this.navCtrl.push(DirectionsPage);
  }


}
