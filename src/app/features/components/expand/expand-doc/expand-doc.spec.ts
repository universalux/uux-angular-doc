import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandDoc } from './expand-doc';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('ExpandDoc', () => {
  let component: ExpandDoc;
  let fixture: ComponentFixture<ExpandDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandDoc],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
