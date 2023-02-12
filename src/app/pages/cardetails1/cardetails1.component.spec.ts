import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardetails1Component } from './cardetails1.component';

describe('Cardetails1Component', () => {
  let component: Cardetails1Component;
  let fixture: ComponentFixture<Cardetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cardetails1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
