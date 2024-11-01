import { TestBed } from '@angular/core/testing';

import { TradutorPtBRService } from './tradutor-pt-br.service';

describe('TradutorPtBRService', () => {
  let service: TradutorPtBRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradutorPtBRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
