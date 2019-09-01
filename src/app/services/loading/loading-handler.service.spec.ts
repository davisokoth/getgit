import { TestBed } from '@angular/core/testing';

import { LoadingHandlerService } from './loading-handler.service';

describe('LoadingHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingHandlerService = TestBed.get(LoadingHandlerService);
    expect(service).toBeTruthy();
  });
});
