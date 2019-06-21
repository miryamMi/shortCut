import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpCustomerService } from '../http-customer.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
//import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { Observable } from 'rxjs';
import { ProductListByCategoryComponent } from '../product-list-by-category/product-list-by-category.component';
import { Product } from '../product.model';
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
  productToShow:string[]=[];
  //productArr:Observable<Product[]>;
  productArr:Product[]=[];
  @Output()
  flag:boolean=false;
  // @ViewChild(ProductListByCategoryComponent)
  // ProductListByCategoryComponent:ProductListByCategoryComponent
  
  constructor(private cdr:ChangeDetectorRef, private http:HttpClient, private _activatedRoute: ActivatedRoute,private _HttpCustomerService:HttpCustomerService) { 
  }
  ngOnInit()
  {
    this._activatedRoute.params.subscribe(x=>{
      if(x!=null)
      this.name=x.name})
  }

  getProductByCategory( categoryId:string){
    // this.productArr= this._HttpCustomerService.getProductByCategoryFromServer(categoryId);
    this._HttpCustomerService.getProductByCategoryFromServer(categoryId).subscribe(x=>
      {this.cdr.detectChanges();this.productArr=x;this.flag=true;
      });
  }
  closeProductList()
  {
    this.flag=false;
  }
  onAddProductToList(product:string){
    alert("ok");
 this.productToShow.push(product);
  }
  // editList()  
  // {    
  //   this.cdr.detectChanges();
  //  // this.productArr=[];
  //   this._HttpCustomerService.getProuducts(this.product).subscribe( x=>{
  //   for (let index = 0; x[index]!=null; index++) {
  //   this.productArr.push(x[index].product_name)  
  // }
  //})
 

 // }
}


