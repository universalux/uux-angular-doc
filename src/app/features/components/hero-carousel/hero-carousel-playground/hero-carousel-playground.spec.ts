import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCarouselPlayground } from './hero-carousel-playground';
import { provideZonelessChangeDetection } from '@angular/core';

describe('HeroCarouselPlayground', () => {
  let component: HeroCarouselPlayground;
  let fixture: ComponentFixture<HeroCarouselPlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCarouselPlayground],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCarouselPlayground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
