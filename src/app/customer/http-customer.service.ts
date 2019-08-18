import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';
import { Product } from './product.model';
import { User } from '../welcome/user.model';
import { WelcomeService } from '../welcome/welcome.service';
import { stringify } from 'querystring';
import { Shop } from './customer-list/shop.model';

@Injectable({
  providedIn: 'root'
})
export class HttpCustomerService {

  constructor(private _http: HttpClient, private _httpUser: WelcomeService) { }

  //קבלת מוצרים לפי קטגוריה
  getProductByCategoryFromServer(Categoryid: string): Observable<Product[]> {
    return this._http.get<Product[]>("api/Customer/?categoryId=" + Categoryid);
  }
  name: String;
  nameCustomerAndProduct: NameCustomerAndProduct;
  //הוספת מוצר לרשימת קניות של לקוח
  addProductToCustomerList(ListproductId: number[]): Observable<boolean> {
    this.nameCustomerAndProduct = {
      customerName: localStorage.getItem('userId').toString(),
      ProductID: ListproductId
    }
    return this._http.post<boolean>("/api/Customer/", this.nameCustomerAndProduct);
  }
  //קבלת רשימת קניות של לקוח
  getListOfCustomer(customerId: number): Observable<Product[]> {
    return this._http.get<Product[]>("api/Customer/?customerId=" + customerId);
  }
  //קבלת רשימת חנויות
  getShopList(): Observable<Shop[]> {

    return this._http.get<Shop[]>("api/Customer/")
  }
  

}
export class NameCustomerAndProduct {

  customerName: string;
  ProductID: number[];

  constructor() {
  }


}
