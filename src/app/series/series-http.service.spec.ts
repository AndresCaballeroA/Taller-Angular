import { TestBed } from '@angular/core/testing';

import { SeriesHttpService } from './series-http.service';

describe('SeriesHttpService', () => {
  let service: SeriesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
