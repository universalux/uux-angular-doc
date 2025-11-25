import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandGroupDoc } from './expand-group-doc';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('ExpandGroupDoc', () => {
  let component: ExpandGroupDoc;
  let fixture: ComponentFixture<ExpandGroupDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandGroupDoc],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandGroupDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
