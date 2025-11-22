import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleKit } from './toggle-kit';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ToggleKit', () => {
  let component: ToggleKit;
  let fixture: ComponentFixture<ToggleKit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleKit],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleKit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
