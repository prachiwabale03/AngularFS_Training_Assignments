import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprangeComponent } from './emprange.component';

describe('EmprangeComponent', () => {
  let component: EmprangeComponent;
  let fixture: ComponentFixture<EmprangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
