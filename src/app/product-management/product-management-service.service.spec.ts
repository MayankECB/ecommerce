import { TestBed } from '@angular/core/testing';

import { ProductManagementServiceService } from './product-management-service.service';

describe('ProductManagementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductManagementServiceService = TestBed.get(ProductManagementServiceService);
    expect(service).toBeTruthy();
  });
});
