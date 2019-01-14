import { TestBed } from '@angular/core/testing';

import { MyMoviesService } from './my-movies.service';

describe('MyMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyMoviesService = TestBed.get(MyMoviesService);
    expect(service).toBeTruthy();
  });
});
