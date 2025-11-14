import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTable } from './data-table';
import { provideZonelessChangeDetection } from '@angular/core';

describe('DataTable', () => {
  let component: DataTable;
  let fixture: ComponentFixture<DataTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTable],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
