import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkButtonPlayground } from './link-button-playground';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('LinkButtonPlayground', () => {
  let component: LinkButtonPlayground;
  let fixture: ComponentFixture<LinkButtonPlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkButtonPlayground],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkButtonPlayground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
