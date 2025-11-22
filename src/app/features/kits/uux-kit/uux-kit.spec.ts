import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UuxKit } from './uux-kit';
import { provideZonelessChangeDetection } from '@angular/core';

describe('UuxKit', () => {
  let component: UuxKit;
  let fixture: ComponentFixture<UuxKit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UuxKit],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UuxKit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
