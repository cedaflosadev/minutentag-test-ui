import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuSizeCardComponent } from './sku-size-card.component';

describe('SkuSizeCardComponent', () => {
  let component: SkuSizeCardComponent;
  let fixture: ComponentFixture<SkuSizeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkuSizeCardComponent]
    });
    fixture = TestBed.createComponent(SkuSizeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
