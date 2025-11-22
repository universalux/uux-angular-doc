import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeatComponents } from './home-feat-components';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('HomeFeatComponents', () => {
  let component: HomeFeatComponents;
  let fixture: ComponentFixture<HomeFeatComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFeatComponents],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFeatComponents);
    component = fixture.componentInstance;
    fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
