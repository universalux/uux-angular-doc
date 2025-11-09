import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLayout } from './component-layout';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('ComponentLayout', () => {
  let component: ComponentLayout;
  let fixture: ComponentFixture<ComponentLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLayout],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
