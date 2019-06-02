import { Component, OnInit, Input } from '@angular/core';
import { WelcomeService } from '../welcome.service';
import { User } from '../user.model';

@Component({
  selector: 'app-set-user',
  templateUrl: './set-user.component.html',
  styleUrls: ['./set-user.component.css']
})
export class SetUserComponent implements OnInit {
  @Input()
  user:User=new User()
  constructor(private _WelcomeService:WelcomeService) { }

  ngOnInit() {
  }
  //הוספת משתמש חדש
  addUser(){ 
   alert(this.user.PermissionTypeID);
   debugger;
   this._WelcomeService.addUserToServer(this.user).subscribe(x=>alert(x));
  }
}
