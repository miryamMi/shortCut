import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rectangle } from './rectangle.model';
import { Category } from './Category.model';
import { Shop } from '../customer/customer-list/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {


  constructor(private _http: HttpClient) { }
  getCategories(): Observable<Category[]> {
    return this._http.get<Category[]>("/api/Manager/getCategories");
  }
  //הפונקציה מחזירה את נקודות המתאר של החנות
  getShopRecs(shopName: string): Observable<Rectangle[]> {

    return this._http.get<Rectangle[]>("/api/Manager/?name=" + shopName);
  }
  //מחזירה רשימת חנויות למנהל
  getShopList(name: string, password: string): Observable<Shop[]> {
    debugger;
    const formData: FormData = new FormData();
    formData.append('name', name);
    formData.append('password', password);
    return this._http.post<Shop[]>("api/Manager/getShopList",formData);
  }
  saveCategoryForRec(Category: number, recId: number): Observable<boolean> {
    debugger;
    const formData: FormData = new FormData();
    formData.append('Category', Category.toString());
    formData.append('RecId', recId.toString());
    return this._http.post<boolean>('api/Manager/savecategorytorec', formData);
  }


  uploadAutoCad(autoCad, shopName: string): Observable<boolean> {

    const formData: FormData = new FormData();
    formData.append('AutoCad', autoCad, autoCad.name);
    formData.append('ComponentId', '1');
    formData.append('shopName', shopName);
    formData.append('managerName', localStorage.getItem("name"));


    return this._http.post<boolean>('/api/Manager/UploadAutoCad', formData);
  }
}

