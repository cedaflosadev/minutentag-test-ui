import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCategoryProductComponent } from './grid-category-product.component';

describe('GridCategoryProductComponent', () => {
  let component: GridCategoryProductComponent;
  let fixture: ComponentFixture<GridCategoryProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GridCategoryProductComponent]
    });
    fixture = TestBed.createComponent(GridCategoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
