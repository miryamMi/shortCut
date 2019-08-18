import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { WelcomeService } from '../welcome.service';
import { User } from '../user.model';
import { MenuModule, MenuItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { Key } from 'protractor';


@Component({
  selector: 'app-set-user',
  templateUrl: './set-user.component.html',
  styleUrls: ['./set-user.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class SetUserComponent implements OnInit {
  @Input()
  user:User=new User()
  constructor(private _router: Router,private _WelcomeService:WelcomeService) { }

  ngOnInit() {
    
  }
  //הוספת משתמש חדש
  addUser(){ 
   alert(this.user.PermissionTypeID);

    this._WelcomeService.addUserToServer(this.user).subscribe((x: number) => {
    localStorage.setItem('userId', x.toString());
     if(this.user.PermissionTypeID==2)
     {
       //ניווט לקומפוננטת לקוח
      this._router.navigate(["/customerList"]);
     }
     else{
       //ניווט לקומפוננטת מנהל
      this._router.navigate(["/mangerPlan"]);
     }
    });
   
  }
}
