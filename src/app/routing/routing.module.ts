import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CustomerListComponent } from '../customer/customer-list/customer-list.component';
import { WelcomeComponent } from '../welcome/welcome/welcome.component';
import { SetUserComponent } from '../welcome/set-user/set-user.component';
import { ManagerPlanComponent } from '../manager/manager-plan/manager-plan.component';


const APP_ROUTES:Route[]=[
  {path:"setUser",component:SetUserComponent},
  {path:"customerList",component:CustomerListComponent},
  {path:"mangerPlan", component: ManagerPlanComponent},
  {path: "",pathMatch:"full",component:WelcomeComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(APP_ROUTES), 
  ],
exports:[RouterModule]

})
export class RoutingModule { }
