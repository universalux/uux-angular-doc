import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCarouselDoc } from './content-carousel-doc';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('ContentCarouselDoc', () => {
  let component: ContentCarouselDoc;
  let fixture: ComponentFixture<ContentCarouselDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentCarouselDoc],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCarouselDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
