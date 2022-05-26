import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbannerComponent } from './loginbanner.component';

describe('LoginbannerComponent', () => {
  let component: LoginbannerComponent;
  let fixture: ComponentFixture<LoginbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
