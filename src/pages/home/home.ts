import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

import { DetailsPage} from "../details/details";
import {HandlerProvider} from "../../providers/handler/handler";
import {TransportProvider} from "../../providers/transport/transport";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  buses;
  // origins and destinations
  places = ["BORNOVA","BALÇOVA","HALKAPINAR","KONAK","EGEKENT","FALTAY","GAZIEMIR"];
 from: string;
 to: string;
  journey = {
    origin: " ",
    destination: " ",
    location:{
      logitude:0,
      latitude:0
    }
  }

  errorMessage: String;
  constructor(
    public navCtrl: NavController,
    public handler: HandlerProvider,
    public AlertCtrl:AlertController,
    public transProvider:TransportProvider){
   // this.journey.origin = "BORNOVA";
   // this.journey.destination = "BORNOVA";
  }
getData(){

    if(this.journey.origin == " " || this.journey.destination == " "){
      this.errorMessage = "FILL IN THE ORIGIN AND DESSTINATION";
      const alert = this.AlertCtrl.create({
        title:' ',
        subTitle:''+ this.errorMessage,
        buttons:['OK']
      });
      alert.present();
    }else{
      if(this.journey.origin == this.journey.destination){
        const alert = this.AlertCtrl.create({
          title:' ',
          subTitle:'ORIGIN AND DESTINATION SHOULD NOT BE SAME',
          buttons:['OK']
        });
        alert.present();
        return;
      }
      //this.navCtrl.push(DetailsPage,this.journey);
      let Routes = this.handler.getRoutes(this.journey);
      console.log("i got the data from handler and transp",Routes);
      if(Routes.length == 0){
        console.log("i dont gat anything");
        const alert = this.AlertCtrl.create({
          title:'Sorry',
          subTitle:'We dont have any information for those two points',
          buttons:['OK']
        });
        alert.present();
      }
      this.navCtrl.push(DetailsPage,Routes);
     // console.log(this.handler.getTransportInfo(this.journey));
    }

}
ionViewDidLoad(){
   console.log("ionViewDidLoad");

   //this.buses =  this.transProvider.getInfo();
  console.log(this.buses);
}
}
