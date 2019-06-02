import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HttpCustomerService } from './http-customer.service';

@NgModule({
  declarations: [ CustomerListComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports:[CustomerListComponent],
  providers:[HttpCustomerService]
})
export class CustomerModule { }
