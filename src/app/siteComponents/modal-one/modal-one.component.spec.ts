import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOneComponent } from './modal-one.component';

describe('ModalOneComponent', () => {
  let component: ModalOneComponent;
  let fixture: ComponentFixture<ModalOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
