import { TestBed } from '@angular/core/testing';

import { ProductManagementService } from './product-management-service.service';

describe('ProductManagementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductManagementService = TestBed.get(ProductManagementService);
    expect(service).toBeTruthy();
  });
});
