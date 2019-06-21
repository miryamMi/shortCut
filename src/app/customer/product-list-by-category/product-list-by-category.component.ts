import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { HttpCustomerService } from '../http-customer.service';

@Component({
  selector: 'app-product-list-by-category',
  templateUrl: './product-list-by-category.component.html',
  styleUrls: ['./product-list-by-category.component.css']
})
export class ProductListByCategoryComponent implements OnInit {
productArrToShow:Product[]=[];
filterProductArr:Product[]=[];
findProduct:string;
@Input()
product:Product=new Product();   
@Input()
productArr:Product[]=[];
//  productArr:Observable<Product[]>;
@Output() 
ClickClose:  EventEmitter<any> = new EventEmitter<any>();
@Output() 
AddProductToList:  EventEmitter<string> = new EventEmitter<string>();
  constructor(private _httpCustomer:HttpCustomerService) { }

  ngOnInit() {
    this.productArrToShow=this.productArr;
  }
  find(){
    this.productArrToShow=[];
    this.filterProductArr=[];
    this.productArr.forEach(el=>{
      let pos=el.ProductName.indexOf(this.findProduct,0)
      if(pos==0){
        this.filterProductArr.push(el);
      }
    });
    if(this.filterProductArr.length>0)
    this.productArrToShow=this.filterProductArr;
    else
    this.productArrToShow=this.productArr;

  }
  onClose()
  {
    this.ClickClose.emit();
  }

  onAddToList(){
   this.AddProductToList.emit(this.product[0].ProductName);
   this._httpCustomer.addProductToCustomerList(this.product[0].BarCode).subscribe(  x=> alert(
    x
   ));
  }
}
