import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionbannerComponent } from './editionbanner.component';

describe('EditionbannerComponent', () => {
  let component: EditionbannerComponent;
  let fixture: ComponentFixture<EditionbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
