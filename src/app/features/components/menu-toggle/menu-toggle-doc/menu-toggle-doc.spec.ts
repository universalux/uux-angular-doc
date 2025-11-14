import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuToggleDoc } from './menu-toggle-doc';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('MenuToggleDoc', () => {
  let component: MenuToggleDoc;
  let fixture: ComponentFixture<MenuToggleDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuToggleDoc],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuToggleDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
