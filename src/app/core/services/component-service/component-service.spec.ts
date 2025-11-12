import { TestBed } from '@angular/core/testing';

import { ComponentService } from './component-service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ComponentService', () => {
  let service: ComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(ComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
