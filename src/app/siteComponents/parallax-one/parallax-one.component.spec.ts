import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxOneComponent } from './parallax-one.component';

describe('ParallaxOneComponent', () => {
  let component: ParallaxOneComponent;
  let fixture: ComponentFixture<ParallaxOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
