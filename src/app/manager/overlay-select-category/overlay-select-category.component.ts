import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ManagerService } from '../manager.service';
import { DynamicDialogRef } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/api';
import { Category } from '../Category.model';
@Component({
  selector: 'app-overlay-select-category',
  templateUrl: './overlay-select-category.component.html',
  styleUrls: ['./overlay-select-category.component.css']
})
export class OverlaySelectCategoryComponent implements OnInit {
  categories: any[] = [];
  @Output()
  ClickClose: EventEmitter<any> = new EventEmitter<any>();
  constructor(private _httpManager: ManagerService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
    this._httpManager.getCategories().subscribe(x =>
      this.categories = x);
  }
  selectCar(category: Category) {
    this.ref.close(category);
  }




}
