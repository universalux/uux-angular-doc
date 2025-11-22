import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveMenu } from './responsive-menu';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('ResponsiveMenu', () => {
  let component: ResponsiveMenu;
  let fixture: ComponentFixture<ResponsiveMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveMenu],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
