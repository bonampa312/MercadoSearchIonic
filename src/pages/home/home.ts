import { Component, ViewChild } from '@angular/core';
import { MercadolibreProvider } from '../../providers/mercadolibre/mercadoapi'
import { Content } from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) content: Content
  items:any = []
  mercadolibreLogo = "../../assets/imgs/mercado-libre.png"
  itemName:string = ""
  listScroll = false

  constructor(private _mercadolapi: MercadolibreProvider) {

  }

  goTop(){
    this.content.scrollToTop()
  }

  searchItems(){
    this._mercadolapi.searchItems(this.itemName).then(
      (data)=>{
        this.listScroll = true
        this.items = data
        console.log(this.items)
      }
    )
  }
}
