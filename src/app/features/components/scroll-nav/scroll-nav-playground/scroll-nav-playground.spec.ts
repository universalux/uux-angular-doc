import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollNavPlayground } from './scroll-nav-playground';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ScrollNavPlayground', () => {
  let component: ScrollNavPlayground;
  let fixture: ComponentFixture<ScrollNavPlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollNavPlayground],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollNavPlayground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
