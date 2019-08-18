import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeService } from './welcome.service';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { GalleriaModule } from 'primeng/galleria';
import { OverlayLoginComponent } from './overlay-login/overlay-login.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { OverlayManagerComponent } from './overlay-manager/overlay-manager.component';
import { OrderListModule } from 'primeng/orderlist';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [WelcomeComponent, OverlayLoginComponent, OverlayManagerComponent],
  imports: [
    CommonModule, FormsModule
    , InputTextModule,
    PasswordModule,
    GalleriaModule,
    OverlayPanelModule,
    DynamicDialogModule,
    OrderListModule,
    DropdownModule
  ],
  exports: [WelcomeComponent],
  providers: [WelcomeService],
  entryComponents: [
    OverlayLoginComponent,
    OverlayManagerComponent
  ]
})
export class WelcomeModule { }
