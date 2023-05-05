import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCategoryComponent } from './slide-category.component';

describe('SlideCategoryComponent', () => {
  let component: SlideCategoryComponent;
  let fixture: ComponentFixture<SlideCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SlideCategoryComponent]
    });
    fixture = TestBed.createComponent(SlideCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
