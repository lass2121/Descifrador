import { TestBed } from '@angular/core/testing';

import { HomePendaftarService } from './home-pendaftar.service';

describe('HomePendaftarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomePendaftarService = TestBed.get(HomePendaftarService);
    expect(service).toBeTruthy();
  });
});
