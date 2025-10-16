import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsLayout } from './components-layout';

describe('ComponentsLayout', () => {
  let component: ComponentsLayout;
  let fixture: ComponentFixture<ComponentsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
