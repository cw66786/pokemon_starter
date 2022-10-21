import { TestBed } from '@angular/core/testing';

import { CatchEmAllService } from './catch-em-all.service';

describe('CatchEmAllService', () => {
  let service: CatchEmAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatchEmAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
