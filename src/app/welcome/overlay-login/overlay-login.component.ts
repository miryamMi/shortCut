import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overlay-login',
  templateUrl: './overlay-login.component.html',
  styleUrls: ['./overlay-login.component.css']
})
export class OverlayLoginComponent implements OnInit {
  @Input()
  user: User = new User();

  ngOnInit() {
  }
  constructor(private _router: Router, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  @Output()
  ClickClose: EventEmitter<any> = new EventEmitter<any>();

  setUser() {
    debugger;
    this.ref.close();
    this._router.navigate(["/setUser"]);

  }
  login() {
    this.ref.close(this.user);

  }
}


