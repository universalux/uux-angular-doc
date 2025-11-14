import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardPlayground } from './content-card-playground';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ContentCardPlayground', () => {
  let component: ContentCardPlayground;
  let fixture: ComponentFixture<ContentCardPlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentCardPlayground],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCardPlayground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
