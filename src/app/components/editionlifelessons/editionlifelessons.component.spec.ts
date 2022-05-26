import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionlifelessonsComponent } from './editionlifelessons.component';

describe('EditionlifelessonsComponent', () => {
  let component: EditionlifelessonsComponent;
  let fixture: ComponentFixture<EditionlifelessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionlifelessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionlifelessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
