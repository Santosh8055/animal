import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsureManagementComponent } from './insure-management.component';

describe('InsureManagementComponent', () => {
  let component: InsureManagementComponent;
  let fixture: ComponentFixture<InsureManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsureManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsureManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
