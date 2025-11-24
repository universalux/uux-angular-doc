import { TestBed } from '@angular/core/testing';

import { MetaTagsService } from './meta-tags-service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('MetaTagsService', () => {
  let service: MetaTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(MetaTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
