import { TestBed } from '@angular/core/testing';

import { AbilityService } from './ability.service';

describe('AbilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbilityService = TestBed.get(AbilityService);
    expect(service).toBeTruthy();
  });
});
