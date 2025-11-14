import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkButtonDoc } from './link-button-doc';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('LinkButtonDoc', () => {
  let component: LinkButtonDoc;
  let fixture: ComponentFixture<LinkButtonDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkButtonDoc],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkButtonDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
