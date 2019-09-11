import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CapcoSampleService } from './capco-sample.service';

describe('CapcoSampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpClient]
  }));

  it('should be created', () => {
    const service: CapcoSampleService = TestBed.get(CapcoSampleService);
    expect(service).toBeTruthy();
  });
});
