import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBlock } from './code-block';
import { provideZonelessChangeDetection } from '@angular/core';

describe('CodeBlock', () => {
  let component: CodeBlock;
  let fixture: ComponentFixture<CodeBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeBlock],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
