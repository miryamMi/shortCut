import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayManagerComponent } from './overlay-manager.component';

describe('OverlayManagerComponent', () => {
  let component: OverlayManagerComponent;
  let fixture: ComponentFixture<OverlayManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
