import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import { WelcomeModule } from './welcome/welcome.module';
import { SetUserComponent } from './welcome/set-user/set-user.component';
import { CustomerModule } from './customer/customer.module';
import { ManagerModule } from './manager/manager.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
    declarations: [AppComponent, SetUserComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule,
        ManagerModule, WelcomeModule
        , RoutingModule, CustomerModule
        , BrowserAnimationsModule,
        InputTextModule,
        RadioButtonModule,
        ButtonModule,
        OverlayPanelModule,
        DynamicDialogModule,
        
    ],
    bootstrap: [AppComponent],

})
export class AppModule {

}