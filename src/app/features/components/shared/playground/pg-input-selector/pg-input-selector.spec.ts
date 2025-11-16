import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgInputSelector } from './pg-input-selector';
import { provideZonelessChangeDetection } from '@angular/core';

describe('PgInputSelector', () => {
  let component: PgInputSelector;
  let fixture: ComponentFixture<PgInputSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgInputSelector],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgInputSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
