import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCalculatorComponent } from './view-calculator.component';

describe('ViewCalculatorComponent', () => {
  let component: ViewCalculatorComponent;
  let fixture: ComponentFixture<ViewCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
