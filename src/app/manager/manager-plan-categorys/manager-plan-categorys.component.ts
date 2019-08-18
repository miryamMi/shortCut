import { Component, OnInit } from '@angular/core';
import { Rectangle } from '../rectangle.model';
import { Category } from '../Category.model';
import { ManagerService } from '../manager.service';
import { OverlaySelectCategoryComponent } from '../overlay-select-category/overlay-select-category.component';
import { DialogService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager-plan-categorys',
  templateUrl: './manager-plan-categorys.component.html',
  styleUrls: ['./manager-plan-categorys.component.css'],
  providers: [DialogService]

})
export class ManagerPlanCategorysComponent implements OnInit {
  mitarPoint: Rectangle[] = [];
  canvas: any;
  ctx: any;
  shopName: string;
  rectangleClicked: Rectangle;
  constructor(private _activeRoute: ActivatedRoute, private _httpManger: ManagerService, public dialogService: DialogService) { }

  ngOnInit() {
    this._activeRoute.paramMap.subscribe(params => {
      if (params.has("shopName")) {
        this.shopName = params.get("shopName");
        this.drawRectable();

      }
    })
  }



  show() {
    const ref = this.dialogService.open(OverlaySelectCategoryComponent, {
      header: 'בחר קטגוריה',
      width: '40%',

    });

    ref.onClose.subscribe((category: Category) => {
      if (category) {
        this.imageObj.src = "../../../assets/img/category1.png";
        alert(category.CategoryName);
        this._httpManger.saveCategoryForRec(category.CategoryId, this.rectangleClicked.recID).subscribe();
        // this.ctx.fillRect(this.rectangleClicked.x, this.rectangleClicked.y, this.rectangleClicked.width, this.rectangleClicked.heigh)
        this.ctx.drawImage(this.imageObj, this.rectangleClicked.x + this.rectangleClicked.width / 2, this.rectangleClicked.y, 35, 35);

      }
    });
  }

  ngAfterViewInit() {


    if (document.getElementById('stage') != null)
      document.getElementById('stage').addEventListener('click', this.onClick.bind(this));
  }
  imageObj = new Image();
  imageObj2 = new Image();


  //מיקום קטגוריות על המפ ה
  onClick(event) {
    //var image = new Image();

    //image.src = "../../../assets/img/1.png";
    this._httpManger.getCategories().subscribe();
    var x = event.offsetX;
    var y = event.offsetY;
    for (var i = 0; i < this.mitarPoint.length; i++) {
      if (x  > this.mitarPoint[i].x          // mouse x between x and x + width
        && x < this.mitarPoint[i].x + this.mitarPoint[i].width
        && y > (this.mitarPoint[i].y)           // mouse y between y and y + height
        && y < (this.mitarPoint[i].y) + this.mitarPoint[i].heigh) {
        this.rectangleClicked = this.mitarPoint[i];
        this.show();
        //if (this.ctx != null) {
        // debugger;
        // this.ctx.drawImage(image, this.mitarPoint[i].x + this.mitarPoint[i].width / 2, this.mitarPoint[i].y, 25, 25);
        //}
      }
    }
  }


  drawRectable() {
    this.canvas = document.getElementById('stage');
    if (this.canvas.getContext) {
      this.ctx = this.canvas.getContext('2d');
      this.ctx.fillStyle = "#D74022";
      //ctx.fillRect(25, 25, 150, 150);
      this.ctx.fillStyle = "rgba(0,0,0,0.5)";
      this.ctx.clearRect(400, 60, 120, 120);
      this._httpManger.getShopRecs(this.shopName).subscribe(
        x => {
          this.mitarPoint = x;
          for (let index = 0; index < this.mitarPoint.length; index++) {
            this.ctx.strokeRect(this.mitarPoint[index].x, this.mitarPoint[index].y, this.mitarPoint[index].width, this.mitarPoint[index].heigh);
            if (this.mitarPoint[index].categoryID != null) {
              // this.imageObj.src = "../../../assets/img/category" + this.mitarPoint[index].categoryID + ".png";
              this.imageObj2.src = "../../../assets/img/category1.png";
              debugger;
              this.ctx.drawImage(this.imageObj2, this.mitarPoint[index].x + this.mitarPoint[index].width / 2, this.mitarPoint[index].y, 25, 25);

            }

          }
        });
    }

  }
}
