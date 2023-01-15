import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})


export class MessageService{

  constructor(){}

  showMsg(){
    console.log('Hey Bienvenue sur votre plateforme tout savoir 👌 .')
  }
}
