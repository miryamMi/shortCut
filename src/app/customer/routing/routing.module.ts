import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CustomerListComponent } from '../customer-list/customer-list.component';



const CUSTOMER_ROUTES:Route[]=[
  {path:"customerList/:name",component:CustomerListComponent},
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(CUSTOMER_ROUTES), 
  ],
exports:[RouterModule]

})
export class RoutingModule { }
