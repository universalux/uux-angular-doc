import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeTogglePlayground } from './theme-toggle-playground';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ThemeTogglePlayground', () => {
  let component: ThemeTogglePlayground;
  let fixture: ComponentFixture<ThemeTogglePlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeTogglePlayground],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeTogglePlayground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
