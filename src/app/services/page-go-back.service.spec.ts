import { TestBed } from '@angular/core/testing';

import { PageGoBackService } from './page-go-back.service';

describe('PageGoBackService', () => {
  let service: PageGoBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageGoBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
