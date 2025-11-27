import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatePlayground } from './rate-playground';
import { provideZonelessChangeDetection } from '@angular/core';

describe('RatePlayground', () => {
  let component: RatePlayground;
  let fixture: ComponentFixture<RatePlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatePlayground],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatePlayground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
