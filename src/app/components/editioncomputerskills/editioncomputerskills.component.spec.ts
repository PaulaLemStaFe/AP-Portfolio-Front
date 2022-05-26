import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditioncomputerskillsComponent } from './editioncomputerskills.component';

describe('EditioncomputerskillsComponent', () => {
  let component: EditioncomputerskillsComponent;
  let fixture: ComponentFixture<EditioncomputerskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditioncomputerskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditioncomputerskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
