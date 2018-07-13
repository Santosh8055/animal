import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInsureManagementComponent } from './view-insure-management.component';

describe('ViewInsureManagementComponent', () => {
  let component: ViewInsureManagementComponent;
  let fixture: ComponentFixture<ViewInsureManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInsureManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInsureManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
