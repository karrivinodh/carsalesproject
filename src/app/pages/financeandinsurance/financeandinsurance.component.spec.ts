import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceandinsuranceComponent } from './financeandinsurance.component';

describe('FinanceandinsuranceComponent', () => {
  let component: FinanceandinsuranceComponent;
  let fixture: ComponentFixture<FinanceandinsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceandinsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceandinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
