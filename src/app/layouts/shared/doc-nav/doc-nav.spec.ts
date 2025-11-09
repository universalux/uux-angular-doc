import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocNav } from './doc-nav';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('DocNav', () => {
  let component: DocNav;
  let fixture: ComponentFixture<DocNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocNav],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
