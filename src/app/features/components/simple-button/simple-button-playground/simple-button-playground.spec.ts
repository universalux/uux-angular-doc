import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleButtonPlayground } from './simple-button-playground';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SimpleButtonPlayground', () => {
  let component: SimpleButtonPlayground;
  let fixture: ComponentFixture<SimpleButtonPlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleButtonPlayground],
      providers: [provideZonelessChangeDetection()]
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
