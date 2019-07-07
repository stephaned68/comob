import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesPage } from './abilities.page';

describe('AbilitiesPage', () => {
  let component: AbilitiesPage;
  let fixture: ComponentFixture<AbilitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
