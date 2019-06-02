import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private _http :HttpClient) { }

   //פונקציה לזיהוי משתמש וכניסה למערכת
        enterToPersonalSection(user:User):Observable<Injectable>{
          return this._http.get<Injectable>("/api/User/?name="+ user.name  )
      }

        // //רישום לקוח חדש
      addUserToServer(user:User):Observable<boolean>
      {
        return this._http.post<boolean>("/api/User/",user );
      }
}
