import { TestBed } from '@angular/core/testing';

import { ScrollService } from './scroll-service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ScrollService', () => {
  let service: ScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(ScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
