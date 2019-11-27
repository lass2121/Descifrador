import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPendaftarPage } from './info-pendaftar.page';

describe('InfoPendaftarPage', () => {
  let component: InfoPendaftarPage;
  let fixture: ComponentFixture<InfoPendaftarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPendaftarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPendaftarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
