import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesPage } from './profiles.page';

describe('ProfilesPage', () => {
  let component: ProfilesPage;
  let fixture: ComponentFixture<ProfilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
