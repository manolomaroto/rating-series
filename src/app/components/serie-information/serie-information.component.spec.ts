import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieInformationComponent } from './serie-information.component';

describe('SerieInformationComponent', () => {
  let component: SerieInformationComponent;
  let fixture: ComponentFixture<SerieInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
