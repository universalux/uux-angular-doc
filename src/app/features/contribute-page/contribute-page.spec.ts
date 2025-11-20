import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributePage } from './contribute-page';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ContributePage', () => {
  let component: ContributePage;
  let fixture: ComponentFixture<ContributePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributePage],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
