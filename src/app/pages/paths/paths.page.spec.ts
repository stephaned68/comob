import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathsPage } from './paths.page';

describe('PathsPage', () => {
  let component: PathsPage;
  let fixture: ComponentFixture<PathsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
