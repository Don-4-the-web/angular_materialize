import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleOneComponent } from './collapsible-one.component';

describe('CollapsibleOneComponent', () => {
  let component: CollapsibleOneComponent;
  let fixture: ComponentFixture<CollapsibleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
