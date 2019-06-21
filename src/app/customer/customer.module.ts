import {NgModule} from "@angular/core"
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HttpCustomerService } from './http-customer.service';
import { RoutingModule } from './routing/routing.module';
import { ProductListByCategoryComponent } from './product-list-by-category/product-list-by-category.component';

@NgModule({
  declarations: [ CustomerListComponent, ProductListByCategoryComponent],
  imports: [
    FormsModule,
    CommonModule,
    RoutingModule,
    
  ],
  exports:[CustomerListComponent],
  providers:[HttpCustomerService]
})
export class CustomerModule { }
