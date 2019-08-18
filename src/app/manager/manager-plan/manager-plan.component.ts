import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ManagerService } from '../manager.service';
import { DialogService } from 'primeng/api';

import { Category } from '../Category.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manager-plan',
  templateUrl: './manager-plan.component.html',
  styleUrls: ['./manager-plan.component.css'],
  providers: [DialogService]
})
export class ManagerPlanComponent implements OnInit {

  @Input()
  shopName: string;
  
  constructor(
    private _httpManger: ManagerService, public dialogService: DialogService ,private _router:Router
  ) {


  }

  ngOnInit() {

  }

  saveDate()
  {
    this._router.navigate(["/managerPlanCategorys",this.shopName]);
  }


  onUpload(event) {
    debugger;
    if (this.shopName == undefined)
      alert("הכנס שם חנות")
    else {
      var s = event.files[0].name.split('.').pop();
      if (s.toString() != 'dwg') {
        alert("הכנס קובץ autocad בלבד!!!!");

      }
      else {
        const file = event.files.item(0);
        this._httpManger.uploadAutoCad(file, this.shopName).subscribe(
          x => alert(x)
        );

      }
    }
  }
}
