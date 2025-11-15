import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCarouselDoc } from './hero-carousel-doc';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('HeroCarouselDoc', () => {
  let component: HeroCarouselDoc;
  let fixture: ComponentFixture<HeroCarouselDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCarouselDoc],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCarouselDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
