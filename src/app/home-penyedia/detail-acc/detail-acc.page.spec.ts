import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAccPage } from './detail-acc.page';

describe('DetailAccPage', () => {
  let component: DetailAccPage;
  let fixture: ComponentFixture<DetailAccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAccPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
