import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardDoc } from './content-card-doc';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('ContentCardDoc', () => {
  let component: ContentCardDoc;
  let fixture: ComponentFixture<ContentCardDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentCardDoc],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCardDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
