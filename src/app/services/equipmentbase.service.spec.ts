import { TestBed } from '@angular/core/testing';

import { EquipmentBaseService } from './equipmentbase.service';

describe('EquipmentBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquipmentBaseService = TestBed.get(EquipmentBaseService);
    expect(service).toBeTruthy();
  });
});
