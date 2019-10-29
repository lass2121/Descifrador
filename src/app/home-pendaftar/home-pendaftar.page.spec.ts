import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePendaftarPage } from './home-pendaftar.page';

describe('HomePendaftarPage', () => {
  let component: HomePendaftarPage;
  let fixture: ComponentFixture<HomePendaftarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePendaftarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePendaftarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
