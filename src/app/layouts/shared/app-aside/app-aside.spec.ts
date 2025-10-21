import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAside } from './app-aside';

describe('AppAside', () => {
  let component: AppAside;
  let fixture: ComponentFixture<AppAside>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAside]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAside);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
