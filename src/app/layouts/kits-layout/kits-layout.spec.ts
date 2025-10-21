import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitsLayout } from './kits-layout';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('KitsLayout', () => {
  let component: KitsLayout;
  let fixture: ComponentFixture<KitsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitsLayout],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitsLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
