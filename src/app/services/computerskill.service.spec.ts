import { TestBed } from '@angular/core/testing';

import { ComputerskillService } from './computerskill.service';

describe('ComputerskillService', () => {
  let service: ComputerskillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerskillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
