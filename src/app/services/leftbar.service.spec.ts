import { TestBed, inject } from '@angular/core/testing';

import { LeftbarService } from './leftbar.service';

describe('LeftbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeftbarService]
    });
  });

  it('should be created', inject([LeftbarService], (service: LeftbarService) => {
    expect(service).toBeTruthy();
  }));
});
