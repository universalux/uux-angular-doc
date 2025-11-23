import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonKit } from './button-kit';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('ButtonKit', () => {
  let component: ButtonKit;
  let fixture: ComponentFixture<ButtonKit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonKit],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonKit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
