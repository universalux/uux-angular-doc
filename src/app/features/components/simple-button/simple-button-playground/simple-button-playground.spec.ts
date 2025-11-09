import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleButtonPlayground } from './simple-button-playground';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('SimpleButtonPlayground', () => {
  let component: SimpleButtonPlayground;
  let fixture: ComponentFixture<SimpleButtonPlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleButtonPlayground],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleButtonPlayground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
