import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleManagementComponent } from './cattle-management.component';

describe('CattleManagementComponent', () => {
  let component: CattleManagementComponent;
  let fixture: ComponentFixture<CattleManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattleManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
