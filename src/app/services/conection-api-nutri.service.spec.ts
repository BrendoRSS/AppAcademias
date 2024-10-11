import { TestBed } from '@angular/core/testing';

import { ConectionApiNutriService } from './conection-api-nutri.service';

describe('ConectionApiNutriService', () => {
  let service: ConectionApiNutriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectionApiNutriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
