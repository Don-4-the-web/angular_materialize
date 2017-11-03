import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialboxOneComponent } from './materialbox-one.component';

describe('MaterialboxOneComponent', () => {
  let component: MaterialboxOneComponent;
  let fixture: ComponentFixture<MaterialboxOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialboxOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialboxOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
