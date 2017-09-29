import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MercadolibreProvider {

  apiLink:any = "https://api.mercadolibre.com/sites/MCO/search"

  constructor(public http: Http) {}

  searchItems(itemName:string){
    return new Promise((resolve, reject)=> {
      var link:string = this.apiLink + '?q=' + itemName
      this.http.get(link).map(res=>res.json()).subscribe(
        (data) => {
          resolve(data.results)
        },
        (error) => {
          reject("Error: "+ error)
        })
      })
    }
  }
