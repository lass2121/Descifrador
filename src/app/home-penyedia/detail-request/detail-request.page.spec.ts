import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRequestPage } from './detail-request.page';

describe('DetailRequestPage', () => {
  let component: DetailRequestPage;
  let fixture: ComponentFixture<DetailRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
