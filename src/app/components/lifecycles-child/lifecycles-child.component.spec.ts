import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclesChildComponent } from './lifecycles-child.component';

describe('LifecyclesChildComponent', () => {
  let component: LifecyclesChildComponent;
  let fixture: ComponentFixture<LifecyclesChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecyclesChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
