import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAside } from './app-aside';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('AppAside', () => {
  let component: AppAside;
  let fixture: ComponentFixture<AppAside>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAside],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAside);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
