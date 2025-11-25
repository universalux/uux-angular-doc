import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandGroupPlayground } from './expand-group-playground';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ExpandGroupPlayground', () => {
  let component: ExpandGroupPlayground;
  let fixture: ComponentFixture<ExpandGroupPlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandGroupPlayground],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandGroupPlayground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
