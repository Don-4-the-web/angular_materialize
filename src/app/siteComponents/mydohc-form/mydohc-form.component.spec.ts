import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydohcFormComponent } from './mydohc-form.component';

describe('MydohcFormComponent', () => {
  let component: MydohcFormComponent;
  let fixture: ComponentFixture<MydohcFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydohcFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydohcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
