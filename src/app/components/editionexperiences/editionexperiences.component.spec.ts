import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionexperiencesComponent } from './editionexperiences.component';

describe('EditionexperiencesComponent', () => {
  let component: EditionexperiencesComponent;
  let fixture: ComponentFixture<EditionexperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionexperiencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionexperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
