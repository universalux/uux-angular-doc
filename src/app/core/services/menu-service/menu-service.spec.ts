import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu-service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
