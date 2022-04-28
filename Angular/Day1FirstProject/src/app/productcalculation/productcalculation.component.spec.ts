import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcalculationComponent } from './productcalculation.component';

describe('ProductcalculationComponent', () => {
  let component: ProductcalculationComponent;
  let fixture: ComponentFixture<ProductcalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
