import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleButtonDoc } from './simple-button-doc';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SimpleButtonDoc', () => {
  let component: SimpleButtonDoc;
  let fixture: ComponentFixture<SimpleButtonDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleButtonDoc],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleButtonDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
