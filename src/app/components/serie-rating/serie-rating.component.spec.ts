import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieRatingComponent } from './serie-rating.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RouterTestingModule } from '@angular/router/testing';

describe('SerieRatingComponent', () => {
  let component: SerieRatingComponent;
  let fixture: ComponentFixture<SerieRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieRatingComponent ],
      imports : [ HttpClientTestingModule, RouterTestingModule ]
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
