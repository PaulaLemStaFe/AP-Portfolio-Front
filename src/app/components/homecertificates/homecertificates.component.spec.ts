import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecertificatesComponent } from './homecertificates.component';

describe('HomecertificatesComponent', () => {
  let component: HomecertificatesComponent;
  let fixture: ComponentFixture<HomecertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecertificatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
