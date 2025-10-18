import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFooter } from './app-footer';
import { provideZonelessChangeDetection } from '@angular/core';

describe('AppFooter', () => {
  let component: AppFooter;
  let fixture: ComponentFixture<AppFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFooter],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
