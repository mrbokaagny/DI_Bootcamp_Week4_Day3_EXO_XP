import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})


export class UserService{

  constructor(){}

  fechApi(){
    const fetching = ajax('https://swapi.dev/api/films').pipe(
      map((res: any) => {
          if (!res.response) {
              window.alert('Value expected!');
          }
      return res.response;
      }),
      catchError(async () => window.alert('Value expected!'))
  );
  return fetching ;
  }

}
