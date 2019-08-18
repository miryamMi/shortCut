import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { HttpCustomerService } from 'src/app/customer/http-customer.service';
import { Shop } from 'src/app/customer/customer-list/shop.model';
import { ManagerService } from 'src/app/manager/manager.service';

@Component({
  selector: 'app-overlay-manager',
  templateUrl: './overlay-manager.component.html',
  styleUrls: ['./overlay-manager.component.css']
})
export class OverlayManagerComponent implements OnInit {
  @Output()
  ClickClose: EventEmitter<any> = new EventEmitter<any>();
  shopList: Shop[] =[];
  selectedShop: Shop;
  constructor(private _ManagerService: ManagerService, private _router: Router, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
  ngOnInit() {
    this._ManagerService.getShopList(localStorage.getItem('name'), localStorage.getItem('password')).subscribe((x) => {
      x.sort(function (a, b) {
        var textA = a.Name.toUpperCase();
        var textB = b.Name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      this.shopList = x;
    })
  }
  openNewShop() {
    this.ref.close();
    this._router.navigate(["/managerPlan"]);
  }
  selectShop() {
    debugger;
    this.ref.close();
    //ניווט לקומפוננטת עריכת קטגוריות ושליחת ה קוד חנות
    alert(this.selectedShop);
    this._router.navigate(["/managerPlanCategorys", this.selectedShop.Name]);

  }




}
