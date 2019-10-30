import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRequestPage } from './history-request.page';

describe('HistoryRequestPage', () => {
  let component: HistoryRequestPage;
  let fixture: ComponentFixture<HistoryRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryRequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
