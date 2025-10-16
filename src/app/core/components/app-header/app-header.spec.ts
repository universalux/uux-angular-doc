import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeader } from './app-header';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, RouterLink } from '@angular/router';

describe('AppHeader', () => {
  let component: AppHeader;
  let fixture: ComponentFixture<AppHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeader, RouterLink],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
