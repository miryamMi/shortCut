import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPlanCategorysComponent } from './manager-plan-categorys.component';

describe('ManagerPlanCategorysComponent', () => {
  let component: ManagerPlanCategorysComponent;
  let fixture: ComponentFixture<ManagerPlanCategorysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerPlanCategorysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerPlanCategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
