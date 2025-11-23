import { TestBed } from '@angular/core/testing';

import { RouterService } from './router-service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('RouterService', () => {
  let service: RouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(RouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
