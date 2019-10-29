import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePenyediaPage } from './home-penyedia.page';

describe('HomePenyediaPage', () => {
  let component: HomePenyediaPage;
  let fixture: ComponentFixture<HomePenyediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePenyediaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePenyediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
