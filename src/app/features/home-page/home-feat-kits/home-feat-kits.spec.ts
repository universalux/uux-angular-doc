import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeatKits } from './home-feat-kits';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('HomeFeatComponents', () => {
  let component: HomeFeatKits;
  let fixture: ComponentFixture<HomeFeatKits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFeatKits],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFeatKits);
    component = fixture.componentInstance;
    fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
