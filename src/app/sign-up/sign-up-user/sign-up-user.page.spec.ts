import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpUserPage } from './sign-up-user.page';

describe('SignUpUserPage', () => {
  let component: SignUpUserPage;
  let fixture: ComponentFixture<SignUpUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
