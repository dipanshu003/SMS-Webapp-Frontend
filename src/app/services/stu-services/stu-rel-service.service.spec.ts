import { TestBed } from '@angular/core/testing';

import { StuRelServiceService } from './stu-rel-service.service';

describe('StuRelServiceService', () => {
  let service: StuRelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StuRelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
