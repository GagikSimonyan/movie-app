import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingMoviesComponent } from './rating-movies.component';

describe('RatingMoviesComponent', () => {
  let component: RatingMoviesComponent;
  let fixture: ComponentFixture<RatingMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
