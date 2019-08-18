import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ManagerPlanComponent } from '../manager-plan/manager-plan.component';
import { ManagerPlanCategorysComponent } from '../manager-plan-categorys/manager-plan-categorys.component';



const MANAGER_ROUTES:Route[]=[
  { path: "managerPlan", component: ManagerPlanComponent },
  { path: "managerPlanCategorys/:shopName", component: ManagerPlanCategorysComponent },

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(MANAGER_ROUTES), 
  ],
exports:[RouterModule]

})
export class RoutingModule { }
