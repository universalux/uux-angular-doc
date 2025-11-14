import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSectionTitle } from './doc-section-title';
import { provideZonelessChangeDetection } from '@angular/core';

describe('DocSectionTitle', () => {
  let component: DocSectionTitle;
  let fixture: ComponentFixture<DocSectionTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocSectionTitle],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocSectionTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
