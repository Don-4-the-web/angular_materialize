import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselThreeComponent } from './carousel-three.component';

describe('CarouselThreeComponent', () => {
  let component: CarouselThreeComponent;
  let fixture: ComponentFixture<CarouselThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
