import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController} from "ionic-angular";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  //THIS IS SETTINGS PAGE NOT CONTACTS
  defaultCity: String;
  constructor(public navCtrl: NavController,public alertCtl: AlertController) {


  }

  saveCity(){
    const alert = this.alertCtl.create({
      title:'My City',
      subTitle:'Your Default City is saved as ' + this.defaultCity,
      buttons:['OK']
    });
    alert.present();
  }

}
