import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesTryComponent } from './pipes-try.component';

describe('PipesTryComponent', () => {
  let component: PipesTryComponent;
  let fixture: ComponentFixture<PipesTryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesTryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
