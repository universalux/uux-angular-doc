import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateDoc } from './rate-doc';
import { provideZonelessChangeDetection } from '@angular/core';

describe('RateDoc', () => {
  let component: RateDoc;
  let fixture: ComponentFixture<RateDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateDoc],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
