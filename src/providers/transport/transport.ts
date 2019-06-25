import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TransportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransportProvider {
  Buses = [
    {
      StartPoint: "BORNOVA",
      EndPoint: "HALKAPINAR",
      TimeTaken: 15,
      RouteTaken: "bolge-sanayi",
      BusNumber: 311
    },
    {
      StartPoint: "BORNOVA",
      EndPoint: "KONAK",
      TimeTaken: 20,
      RouteTaken: "mithatpaşa",
      BusNumber: 400
    },
    {
      StartPoint: "KONAK",
      EndPoint: "EGEKENT",
      TimeTaken: 35,
      RouteTaken: "bolge-sanayi",
      BusNumber: 500
    },
    {
      StartPoint: "FALTAY",
      EndPoint: "GAZIEMIR",
      TimeTaken: 45,
      RouteTaken: "cevreyolu",
      BusNumber: 12
    },
    {
      StartPoint: "FALTAY",
      EndPoint: "GAZIEMIR",
      TimeTaken: 60,
      RouteTaken: "serbet bolge",
      BusNumber: 450
    }
  ]
  metro = {
    time: 2,
    stops: ["faltay","poligon"]
  }
  constructor(public http: HttpClient) {
    console.log('Hello TransportProvider Provider');
  }

  getInfo(data){
    let tempBuses= [];
    tempBuses = this.Buses.filter(el => el.StartPoint === data.from && el.EndPoint === data.to);
    return tempBuses;
  }
  createInfo(data){
    console.log(data);
  }

}
