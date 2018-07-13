
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalNavComponent } from './animal-nav.component';

describe('AnimalNavComponent', () => {
  let component: AnimalNavComponent;
  let fixture: ComponentFixture<AnimalNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
