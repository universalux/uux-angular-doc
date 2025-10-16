import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsLayout } from './components-layout';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ComponentsLayout', () => {
  let component: ComponentsLayout;
  let fixture: ComponentFixture<ComponentsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsLayout],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
