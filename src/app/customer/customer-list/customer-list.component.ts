import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpCustomerService } from '../http-customer.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
//import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { Observable } from 'rxjs';
//import { markDirtyIfOnPush } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class CustomerListComponent implements OnInit {
  name:string;
  @Input()
  product:string;
  @Input()
  productArr:String[]=[];

  constructor(private cdr:ChangeDetectorRef, private http:HttpClient, private _activatedRoute: ActivatedRoute,private _HttpCustomerService:HttpCustomerService) { }
  ngOnInit()
  {
    this._activatedRoute.params.subscribe(x=>{
      if(x!=null)
      this.name=x.name})
  }
  editList()  
  {    
    this.cdr.detectChanges();
    this.productArr=[];
    this._HttpCustomerService.getProuducts(this.product).subscribe( x=>{
    for (let index = 0; x[index]!=null; index++) {
    this.productArr.push(x[index].product_name)  
  }
  })
  

  }
}


