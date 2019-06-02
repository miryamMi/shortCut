import { Component, OnInit, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { WelcomeService } from '../welcome.service';
import { getNativeByTNode } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
@Input()
  user:User=new User();
  constructor(private _router: Router,private _WelcomeService:WelcomeService ) { }
  @Output()
exsist:boolean=true;
  ngOnInit() {
  }
  //כניסה למערכת ע"י הכנסת שם וסיסמא
  clickOK(){
      this._WelcomeService.enterToPersonalSection(this.user).subscribe(x=>
      {
        if(x==0)
        {
          this.exsist=true;
            //ניווט לקומפוננטת רישום
            alert("משתמש לא קים");
        }  
       else{
          if(x==1)
          {
              //ניווט לקומפוננטת לקוח
               this._router.navigate(["/customerList",this.user.name]);
               this.exsist=false;
          }
        else
        {
          alert("2");
      //  ניוווט לקומפוננטת מנהל x ==2
      this.exsist=false;
        }
       }
        }); 
  }
  setUser(){
    this._router.navigate(["/setUser"]);
  }
}
