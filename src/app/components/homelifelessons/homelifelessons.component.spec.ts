import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelifelessonsComponent } from './homelifelessons.component';

describe('HomelifelessonsComponent', () => {
  let component: HomelifelessonsComponent;
  let fixture: ComponentFixture<HomelifelessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomelifelessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelifelessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
