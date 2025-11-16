import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableOptions } from './expandable-options';

describe('ExpandableOptions', () => {
  let component: ExpandableOptions;
  let fixture: ComponentFixture<ExpandableOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandableOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandableOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
