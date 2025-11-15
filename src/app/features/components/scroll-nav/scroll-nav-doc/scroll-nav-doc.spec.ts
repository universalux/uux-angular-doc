import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollNavDoc } from './scroll-nav-doc';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('ScrollNavDoc', () => {
  let component: ScrollNavDoc;
  let fixture: ComponentFixture<ScrollNavDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollNavDoc],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollNavDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
