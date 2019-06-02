import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class HttpCustomerService {

  constructor(private _http :HttpClient) { }
 
 getProuducts(productName:String): Observable<JSON> {
        return this._http.post<JSON>("https://api.superget.co.il", 
            'api_key=124fdbd5ecda994764b93ddc109d64b884f08556&action=GetProductsByName&product_name='+productName+'&limit=10', 
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } })
               
    }
}
