import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSortOptionsComponent } from './emp-sort-options.component';

describe('EmpSortOptionsComponent', () => {
  let component: EmpSortOptionsComponent;
  let fixture: ComponentFixture<EmpSortOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSortOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSortOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
