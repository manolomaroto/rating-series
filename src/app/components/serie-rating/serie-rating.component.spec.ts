import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieRatingComponent } from './serie-rating.component';

describe('SerieRatingComponent', () => {
  let component: SerieRatingComponent;
  let fixture: ComponentFixture<SerieRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
