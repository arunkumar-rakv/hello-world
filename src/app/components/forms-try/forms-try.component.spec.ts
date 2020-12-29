import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTryComponent } from './forms-try.component';

describe('FormsTryComponent', () => {
  let component: FormsTryComponent;
  let fixture: ComponentFixture<FormsTryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsTryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
