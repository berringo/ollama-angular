import { TestBed } from '@angular/core/testing';

import { LlamaV2Service } from './llama-v2.service';

describe('LlamaV2Service', () => {
  let service: LlamaV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlamaV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
