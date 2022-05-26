import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecomputerskillsComponent } from './homecomputerskills.component';

describe('HomecomputerskillsComponent', () => {
  let component: HomecomputerskillsComponent;
  let fixture: ComponentFixture<HomecomputerskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecomputerskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecomputerskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
