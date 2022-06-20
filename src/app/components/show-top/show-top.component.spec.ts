import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTopComponent } from './show-top.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShowTopComponent', () => {
  let component: ShowTopComponent;
  let fixture: ComponentFixture<ShowTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTopComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
