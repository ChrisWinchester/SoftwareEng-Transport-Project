import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {TransportProvider} from "../transport/transport";
import {Location} from "../../pages/Location";

@Injectable()
export class HandlerProvider {
 location = {
   from: " ",
   to: " "
 };
  RouteInfo =[];
  TransInfo = [];
  constructor(public http: HttpClient,
              public transProvider: TransportProvider) {
    console.log('Hello HandlerProvider Provider');
  }
  getRoutes(data){
   console.log("am in the handler");
   this.location.from = data.origin;
   this.location.to = data.destination;
   console.log(this.location);
   this.RouteInfo = this.transProvider.getInfo(this.location);
   console.log("am out of the handler back to home");
   console.log(this.RouteInfo);
   return this.RouteInfo;
  }

  getTransportInfo(){
    return console.log("ma of to get the best transport info");
  }

}
