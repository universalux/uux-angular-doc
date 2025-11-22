import { TestBed } from '@angular/core/testing';

import { KitService } from './kit-service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('KitService', () => {
  let service: KitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(KitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
