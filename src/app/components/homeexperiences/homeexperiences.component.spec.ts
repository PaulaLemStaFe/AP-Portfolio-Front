import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeexperiencesComponent } from './homeexperiences.component';

describe('HomeexperiencesComponent', () => {
  let component: HomeexperiencesComponent;
  let fixture: ComponentFixture<HomeexperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeexperiencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeexperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
