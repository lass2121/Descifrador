import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestKegiatanPage } from './request-kegiatan.page';

describe('RequestKegiatanPage', () => {
  let component: RequestKegiatanPage;
  let fixture: ComponentFixture<RequestKegiatanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestKegiatanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestKegiatanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
