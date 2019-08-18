import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HttpCustomerService } from './http-customer.service';
import { RoutingModule } from './routing/routing.module';
import { ProductListByCategoryComponent } from './product-list-by-category/product-list-by-category.component';
import { PickListModule } from 'primeng/picklist';
import { OverlaySelectCategoryComponent } from '../manager/overlay-select-category/overlay-select-category.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { OrderListModule } from 'primeng/orderlist';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DragScrollModule } from 'ngx-drag-scroll';
import { DisplayMapComponent } from './display-map/display-map.component';


@NgModule({
  declarations: [CustomerListComponent,
    ProductListByCategoryComponent,
    DisplayMapComponent],
  imports: [

    FormsModule,
    CommonModule,
    RoutingModule,
    PickListModule,
    MenuModule,
    ButtonModule,
    OrderListModule,
    OverlayPanelModule,
    DragScrollModule


  ],
  exports: [CustomerListComponent, ProductListByCategoryComponent],
  providers: [HttpCustomerService],
  entryComponents: [
    OverlaySelectCategoryComponent
  ]
})
export class CustomerModule { }