import { TestBed } from '@angular/core/testing';

import { OmdbMoviesService } from './omdb-movies.service';

describe('OmdbMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OmdbMoviesService = TestBed.get(OmdbMoviesService);
    expect(service).toBeTruthy();
  });
});
