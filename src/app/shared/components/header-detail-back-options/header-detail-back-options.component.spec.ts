import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDetailBackOptionsComponent } from './header-detail-back-options.component';

describe('HeaderDetailBackOptionsComponent', () => {
  let component: HeaderDetailBackOptionsComponent;
  let fixture: ComponentFixture<HeaderDetailBackOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderDetailBackOptionsComponent]
    });
    fixture = TestBed.createComponent(HeaderDetailBackOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
