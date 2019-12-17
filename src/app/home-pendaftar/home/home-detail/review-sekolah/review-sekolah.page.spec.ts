import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSekolahPage } from './review-sekolah.page';

describe('ReviewSekolahPage', () => {
  let component: ReviewSekolahPage;
  let fixture: ComponentFixture<ReviewSekolahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewSekolahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSekolahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
