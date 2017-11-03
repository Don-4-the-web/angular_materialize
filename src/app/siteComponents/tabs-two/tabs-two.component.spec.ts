import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTwoComponent } from './tabs-two.component';

describe('TabsTwoComponent', () => {
  let component: TabsTwoComponent;
  let fixture: ComponentFixture<TabsTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
