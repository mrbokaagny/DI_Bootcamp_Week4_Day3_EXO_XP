import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { User } from './model/user.model';
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users : User[] = []
  apiSub : Observable<any> | undefined ;
  loading : boolean = false

  constructor(private api : UserService , private msg : MessageService){
    this.fetch()
  }

  showMsg(){
    this.msg.showMsg()
  }

  fetch(){
    this.apiSub = this.api.fechApi()

    this.apiSub.subscribe(data =>{
      const tempUsr = data.results
      tempUsr.forEach((elt: any)=> {
        const usr = { name : elt.director }
        this.users.push(usr)
      });
      this.loading = true
    })
  }
}
