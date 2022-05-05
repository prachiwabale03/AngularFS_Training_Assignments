import { TestBed } from '@angular/core/testing';

import { FilterdataService } from './filterdata.service';

describe('FilterdataService', () => {
  let service: FilterdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
