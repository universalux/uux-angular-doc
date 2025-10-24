import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHero } from './home-hero';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('HomeHero', () => {
  let component: HomeHero;
  let fixture: ComponentFixture<HomeHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHero],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
