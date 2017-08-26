import { Component } from '@angular/core';
import { GithubProvider } from '../../providers/github/github'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  informacion:any = []
  username:string = ""

  constructor(private _github: GithubProvider) {

  }

  pressmebaby(){
    this._github.buscarUsuario(this.username).then(
      (data)=>{
        this.informacion = data
        console.log(this.informacion)
      }
    )
  }
}
