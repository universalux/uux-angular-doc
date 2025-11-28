import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsDoc } from './ratings-doc';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('RatingsDoc', () => {
  let component: RatingsDoc;
  let fixture: ComponentFixture<RatingsDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingsDoc],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingsDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
