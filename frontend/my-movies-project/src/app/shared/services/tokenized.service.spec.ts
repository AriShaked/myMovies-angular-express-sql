import { TestBed } from '@angular/core/testing';

import { TokenizedService } from './tokenized.service';

describe('TokenizedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenizedService = TestBed.get(TokenizedService);
    expect(service).toBeTruthy();
  });
});
