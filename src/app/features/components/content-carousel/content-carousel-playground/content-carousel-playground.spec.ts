import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCarouselPlayground } from './content-carousel-playground';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ContentCarouselPlayground', () => {
  let component: ContentCarouselPlayground;
  let fixture: ComponentFixture<ContentCarouselPlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentCarouselPlayground],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCarouselPlayground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
