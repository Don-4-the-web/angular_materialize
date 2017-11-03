import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsOneComponent } from './tabs-one.component';

describe('TabsOneComponent', () => {
  let component: TabsOneComponent;
  let fixture: ComponentFixture<TabsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
