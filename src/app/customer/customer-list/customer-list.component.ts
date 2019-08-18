import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCustomerService } from '../http-customer.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
//import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { Observable } from 'rxjs';
import { ProductListByCategoryComponent } from '../product-list-by-category/product-list-by-category.component';
import { Product } from '../product.model';
import { User } from 'src/app/welcome/user.model';
import { WelcomeService } from 'src/app/welcome/welcome.service';
//import { markDirtyIfOnPush } from '@angular/core/src/render3/instructions';
import { MenuItem } from 'primeng/api';
import { Shop } from './shop.model';
import { ManagerModule } from 'src/app/manager/manager.module';
import { ManagerService } from 'src/app/manager/manager.service';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomerListComponent implements OnInit {
  list1: Product[] = [];
  list2: Product[] = [];
  shopList: Shop[];
  items: MenuItem[] = [];

  name: string;
  @Input()
  product: string;
  productToShow: string[] = [];
  productArr: Product[] = [];
  @Output()
  flag: boolean = false;

  constructor(private _route: Router, private cdr: ChangeDetectorRef, private http: HttpClient, private _HttpCustomerService: HttpCustomerService, private _httpManagerService: ManagerService) {
  }

  ngOnInit() {
    this._HttpCustomerService.getShopList().subscribe((x) => {
      x.sort(function (a, b) {
        var textA = a.Name.toUpperCase();
        var textB = b.Name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      this.shopList = x;
      this.moveTo(2);
    })


    this._HttpCustomerService.getListOfCustomer(
      +localStorage.getItem('userId')).subscribe(
        x => this.list2 = x
      )

  }

  getProductByCategory(categoryId: string) {

    this._HttpCustomerService.getProductByCategoryFromServer(categoryId).subscribe(x => {
      this.list1 = [];
      this.cdr.detectChanges();

      this.list1 = x;
    });
  }


  saveList() {
    this._HttpCustomerService.addProductToCustomerList(this.list2.map(x => x.ID)).subscribe(x => alert(x));
  }
  selectShop(shopName: string) {

    this._route.navigate(["/displayMap", shopName],{ queryParams: { criteriaList: this.list2 } });
    this._httpManagerService.getShopRecs(shopName).subscribe()
  }
  @ViewChild('nav', { read: DragScrollComponent, static: false}) ds: DragScrollComponent;

  moveLeft() {

    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  moveTo(index) {
    this.ds.moveTo(index);
  }

}

