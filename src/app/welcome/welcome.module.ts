import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeService } from './welcome.service';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[WelcomeComponent],
  providers:[WelcomeService]
})
export class WelcomeModule { }
