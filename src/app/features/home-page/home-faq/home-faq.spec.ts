import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFaq } from './home-faq';
import { provideZonelessChangeDetection } from '@angular/core';

describe('HomeFaq', () => {
  let component: HomeFaq;
  let fixture: ComponentFixture<HomeFaq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFaq],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFaq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
