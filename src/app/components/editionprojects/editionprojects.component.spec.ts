import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionprojectsComponent } from './editionprojects.component';

describe('EditionprojectsComponent', () => {
  let component: EditionprojectsComponent;
  let fixture: ComponentFixture<EditionprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
