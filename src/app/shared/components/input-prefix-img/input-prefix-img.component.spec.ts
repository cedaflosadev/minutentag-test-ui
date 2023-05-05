import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPrefixImgComponent } from './input-prefix-img.component';

describe('InputPrefixImgComponent', () => {
  let component: InputPrefixImgComponent;
  let fixture: ComponentFixture<InputPrefixImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputPrefixImgComponent]
    });
    fixture = TestBed.createComponent(InputPrefixImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
