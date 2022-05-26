import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesoftskillsComponent } from './homesoftskills.component';

describe('HomesoftskillsComponent', () => {
  let component: HomesoftskillsComponent;
  let fixture: ComponentFixture<HomesoftskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesoftskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesoftskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
