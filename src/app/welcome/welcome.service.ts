import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private _http: HttpClient) { }
  //פונקציה לזיהוי משתמש וכניסה למערכת
  enterToPersonalSection(user: User): Observable<number> {
    localStorage.setItem('name', user.name);
    localStorage.setItem('password', user.password);
    debugger;
    return this._http.post<number>("api/User/IsCustomerExists", user)

  }
 
  // //רישום לקוח חדש
  addUserToServer(user: User): Observable<number> {
    return this._http.post<number>("/api/User/", user);
  }

}