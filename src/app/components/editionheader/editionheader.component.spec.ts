import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionheaderComponent } from './editionheader.component';

describe('EditionheaderComponent', () => {
  let component: EditionheaderComponent;
  let fixture: ComponentFixture<EditionheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
