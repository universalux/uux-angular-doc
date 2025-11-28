import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsPlayground } from './ratings-playground';
import { provideZonelessChangeDetection } from '@angular/core';

describe('RatingsPlayground', () => {
  let component: RatingsPlayground;
  let fixture: ComponentFixture<RatingsPlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingsPlayground],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingsPlayground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
