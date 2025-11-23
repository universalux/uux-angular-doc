import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandPlayground } from './expand-playground';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ExpandPlayground', () => {
  let component: ExpandPlayground;
  let fixture: ComponentFixture<ExpandPlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandPlayground],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandPlayground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
