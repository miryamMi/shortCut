import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { WelcomeService } from '../welcome.service';
import { getNativeByTNode } from '@angular/core/src/render3/util';
import { OverlayLoginComponent } from '../overlay-login/overlay-login.component';
import { DialogService } from 'primeng/api';
import { OverlayManagerComponent } from '../overlay-manager/overlay-manager.component';
import { Shop } from 'src/app/customer/customer-list/shop.model';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [DialogService]

})
export class WelcomeComponent implements OnInit {

  constructor(private _router: Router, private _WelcomeService: WelcomeService,
    private dialogService: DialogService) {
    this.showOverlayLoginComponent();
  }
  @Output()
  exsist: boolean = true;
  ngOnInit() {

  }
  showOverlayLoginComponent() {
    const ref = this.dialogService.open(OverlayLoginComponent, {
      width: '450px',
      rtl: true,
      // style: { "background-color": "#787899", "color": "red" },
      contentStyle: {
        // "border-color": "#e80b00",
        // "border-width": "2px",
        // "border-style": "solid",
        "height": '250px'
      }
    });

    ref.onClose.subscribe((user: User) => {
      if (user != undefined)
        this.clickOK(user);

    });
  }
  showOverlayManagerComponent() {
    const ref = this.dialogService.open(OverlayManagerComponent, {
      width: '40%',

    });

    ref.onClose.subscribe((shop: Shop) => {


    });
  }
  //כניסה למערכת ע"י הכנסת שם וסיסמא
  clickOK(user: User) {
    this._WelcomeService.enterToPersonalSection(user).subscribe(x => {
      if (x == 0) {
        this.exsist = true;
        //ניווט לקומפוננטת רישום
        alert("משתמש לא קים");
      }
      else {
        if (x == 1) {

          alert("customrt");
          //ניווט לקומפוננטת לקוח
          this._router.navigate(["/customerList"]);
          this.exsist = false;
        }
        else {
          if (x == 3) {
            //ניווט לקומפונטת עריכת חנות חדשה
            this._router.navigate(["/mangerPlan"]);
            this.exsist = false;
          }
          else {
            //מנהל בעל חנות
            this.showOverlayManagerComponent();
          }
        }
      }
    });
  }
  setUser() {
    this._router.navigate(["/setUser"]);
  }

}
