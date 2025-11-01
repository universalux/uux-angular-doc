import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeatComponents } from './home-feat-components';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { componentList } from '@app/core/data/components.data';

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
    component.featuredComponents.set(componentList);
    fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
