import { TestBed } from '@angular/core/testing';

import { CapcoPagerService } from './pager-service.service';

describe('PagerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapcoPagerService = TestBed.get(CapcoPagerService);
    expect(service).toBeTruthy();
  });
});
