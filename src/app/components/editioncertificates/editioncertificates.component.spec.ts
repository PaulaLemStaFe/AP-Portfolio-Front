import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditioncertificatesComponent } from './editioncertificates.component';

describe('EditioncertificatesComponent', () => {
  let component: EditioncertificatesComponent;
  let fixture: ComponentFixture<EditioncertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditioncertificatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditioncertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
