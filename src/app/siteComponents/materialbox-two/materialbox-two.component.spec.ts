import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialboxTwoComponent } from './materialbox-two.component';

describe('MaterialboxTwoComponent', () => {
  let component: MaterialboxTwoComponent;
  let fixture: ComponentFixture<MaterialboxTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialboxTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialboxTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
