import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkButton } from './link-button';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('LinkButton', () => {
  let component: LinkButton;
  let fixture: ComponentFixture<LinkButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkButton],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
