import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeToggleDoc } from './theme-toggle-doc';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('ThemeToggleDoc', () => {
  let component: ThemeToggleDoc;
  let fixture: ComponentFixture<ThemeToggleDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeToggleDoc],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeToggleDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
