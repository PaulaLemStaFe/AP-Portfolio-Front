import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprojectsComponent } from './homeprojects.component';

describe('HomeprojectsComponent', () => {
  let component: HomeprojectsComponent;
  let fixture: ComponentFixture<HomeprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
