import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCategoryCardComponent } from './slide-category-card.component';

describe('SlideCategoryCardComponent', () => {
  let component: SlideCategoryCardComponent;
  let fixture: ComponentFixture<SlideCategoryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SlideCategoryCardComponent]
    });
    fixture = TestBed.createComponent(SlideCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
