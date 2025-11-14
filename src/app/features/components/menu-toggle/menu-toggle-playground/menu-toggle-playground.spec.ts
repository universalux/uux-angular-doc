import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTogglePlayground } from './menu-toggle-playground';
import { provideZonelessChangeDetection } from '@angular/core';

describe('MenuTogglePlayground', () => {
  let component: MenuTogglePlayground;
  let fixture: ComponentFixture<MenuTogglePlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuTogglePlayground],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTogglePlayground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
