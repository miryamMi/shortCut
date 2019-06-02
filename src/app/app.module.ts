import {NgModule} from "@angular/core"
import {BrowserModule}from "@angular/platform-browser"
import {AppComponent}from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import{RouterModule,Routes}from'@angular/router';
import { from } from 'rxjs';
import { CustomerModule } from './customer/customer.module';
import { RoutingModule } from './routing/routing.module';
import { WelcomeModule } from './welcome/welcome.module';
import { SetUserComponent } from './welcome/set-user/set-user.component';



@NgModule({
    declarations:[AppComponent, SetUserComponent],
    imports:[BrowserModule, FormsModule,HttpClientModule,RouterModule,CustomerModule,RoutingModule,WelcomeModule],
    bootstrap:[AppComponent],
  
})
export class AppModule{

}