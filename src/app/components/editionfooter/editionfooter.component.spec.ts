import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionfooterComponent } from './editionfooter.component';

describe('EditionfooterComponent', () => {
  let component: EditionfooterComponent;
  let fixture: ComponentFixture<EditionfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
