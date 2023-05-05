import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTabAvatarComponent } from './header-tab-avatar.component';

describe('HeaderTabAvatarComponent', () => {
  let component: HeaderTabAvatarComponent;
  let fixture: ComponentFixture<HeaderTabAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderTabAvatarComponent]
    });
    fixture = TestBed.createComponent(HeaderTabAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
