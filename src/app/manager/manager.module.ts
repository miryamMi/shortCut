import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerPlanComponent } from './manager-plan/manager-plan.component';
import { ManagerService } from './manager.service';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ListboxModule } from 'primeng/listbox';
import { OverlaySelectCategoryComponent } from './overlay-select-category/overlay-select-category.component';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { OrderListModule } from 'primeng/orderlist';
import { ManagerPlanCategorysComponent } from './manager-plan-categorys/manager-plan-categorys.component';


@NgModule({
  declarations: [ManagerPlanComponent,
    OverlaySelectCategoryComponent,
    ManagerPlanCategorysComponent
  ],
  imports: [
    CommonModule
    , RoutingModule
    , FormsModule
    , HttpClientModule
    , OverlayPanelModule,
    ListboxModule,
    InputTextModule,
    FileUploadModule,
    DynamicDialogModule,
    ButtonModule,
    OrderListModule

  ],
  providers: [ManagerService],
  exports: [ManagerPlanComponent,
    ManagerPlanCategorysComponent],

})
export class ManagerModule {

}
