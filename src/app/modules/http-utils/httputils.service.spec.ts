import { TestBed, inject } from '@angular/core/testing';

import { HttputilsService } from './httputils.service';

describe('HttputilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttputilsService]
    });
  });

  it('should be created', inject([HttputilsService], (service: HttputilsService) => {
    expect(service).toBeTruthy();
  }));
});
