import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsPage } from './components-page';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('ComponentsPage', () => {
  let component: ComponentsPage;
  let fixture: ComponentFixture<ComponentsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsPage],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
