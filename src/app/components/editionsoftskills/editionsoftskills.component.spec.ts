import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionsoftskillsComponent } from './editionsoftskills.component';

describe('EditionsoftskillsComponent', () => {
  let component: EditionsoftskillsComponent;
  let fixture: ComponentFixture<EditionsoftskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionsoftskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionsoftskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
