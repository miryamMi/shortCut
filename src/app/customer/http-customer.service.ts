import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';
import { Product } from './product.model';
import { User } from '../welcome/user.model';
import { WelcomeService } from '../welcome/welcome.service';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class HttpCustomerService {

  constructor(private _http :HttpClient,private _httpUser:WelcomeService) { }
 
 getProuducts(productName:String): Observable<JSON> {
        return this._http.post<JSON>("https://api.superget.co.il", 
            'api_key=124fdbd5ecda994764b93ddc109d64b884f08556&action=GetProductsByName&product_name='+productName+'&limit=10', 
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } })
               
    }
    getProductByCategoryFromServer(Categoryid:string): Observable<Product[]>
    {
      return this._http.get<Product[]>("api/Customer/?categoryId="+Categoryid);
    }
     name:String;
     nameCustomerAndProduct:object;
    addProductToCustomerList(barCode:string):Observable<boolean>{
     this.nameCustomerAndProduct ={customerName:localStorage.getItem('name').toString(),ProductBarCode:barCode}
  
     return this._http.post<boolean>("/api/Customer/",this.nameCustomerAndProduct);
    }
}
