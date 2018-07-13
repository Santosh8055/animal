import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveHealthComponent } from './save-health.component';

describe('SaveHealthComponent', () => {
  let component: SaveHealthComponent;
  let fixture: ComponentFixture<SaveHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
