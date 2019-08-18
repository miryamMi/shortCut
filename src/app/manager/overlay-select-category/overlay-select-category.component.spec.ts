import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaySelectCategoryComponent } from './overlay-select-category.component';

describe('OverlaySelectCategoryComponent', () => {
  let component: OverlaySelectCategoryComponent;
  let fixture: ComponentFixture<OverlaySelectCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlaySelectCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlaySelectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
