import { TestBed } from '@angular/core/testing';

import { ReposHttpService } from './repos-http.service';

describe('ReposHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReposHttpService = TestBed.get(ReposHttpService);
    expect(service).toBeTruthy();
  });
});
