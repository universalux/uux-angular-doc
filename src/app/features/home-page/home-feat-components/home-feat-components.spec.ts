import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeatComponents } from './home-feat-components';

describe('HomeFeatComponents', () => {
  let component: HomeFeatComponents;
  let fixture: ComponentFixture<HomeFeatComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFeatComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFeatComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
