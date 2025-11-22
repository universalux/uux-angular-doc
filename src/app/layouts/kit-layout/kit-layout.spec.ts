import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitLayout } from './kit-layout';
import { provideZonelessChangeDetection } from '@angular/core';

describe('KitLayout', () => {
  let component: KitLayout;
  let fixture: ComponentFixture<KitLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitLayout],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
