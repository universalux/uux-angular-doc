import { TestBed } from '@angular/core/testing';

import { DocService } from './doc-service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('DocService', () => {
  let service: DocService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(DocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
