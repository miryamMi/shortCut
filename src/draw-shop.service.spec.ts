import { TestBed } from '@angular/core/testing';

import { DrawShopService } from './draw-shop.service';

describe('DrawShopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawShopService = TestBed.get(DrawShopService);
    expect(service).toBeTruthy();
  });
});
