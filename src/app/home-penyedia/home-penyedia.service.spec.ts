import { TestBed } from '@angular/core/testing';

import { HomePenyediaService } from './home-penyedia.service';

describe('HomePenyediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomePenyediaService = TestBed.get(HomePenyediaService);
    expect(service).toBeTruthy();
  });
});
