import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ManagerService } from 'src/app/manager/manager.service';
import { Rectangle } from 'src/app/manager/rectangle.model';
import { Product } from '../product.model';

@Component({
  selector: 'app-display-map',
  templateUrl: './display-map.component.html',
  styleUrls: ['./display-map.component.css']
})
export class DisplayMapComponent implements OnInit {
  shopName: string;
  constructor(private _activatedRoute: ActivatedRoute, private _httpManger: ManagerService,
    private router: Router) {

  }
  RectanglePoint: Rectangle[] = [];
  canvas: any;
  ctx: any;
  customerList: string[];
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
          this.RectanglePoint = x;
          for (let index = 0; index < this.RectanglePoint.length; index++) {
            this.ctx.strokeRect(this.RectanglePoint[index].x, this.RectanglePoint[index].y, this.RectanglePoint[index].width, this.RectanglePoint[index].heigh);
          }
        });
    }

  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params => {
      // this.customerList = this.route.snapshot.queryParamMap.get('criteriaList');

      if (params.has("shopName")) {
        this.shopName = params.get("shopName");
       // this.customerList = params.get("list2");
        this.drawRectable();
      }
    })

  }
}
