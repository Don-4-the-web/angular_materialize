import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEmployeeComponent } from './input-employee.component';

describe('InputEmployeeComponent', () => {
  let component: InputEmployeeComponent;
  let fixture: ComponentFixture<InputEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
