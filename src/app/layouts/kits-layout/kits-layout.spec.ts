import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitsLayout } from './kits-layout';

describe('KitsLayout', () => {
  let component: KitsLayout;
  let fixture: ComponentFixture<KitsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitsLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitsLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
