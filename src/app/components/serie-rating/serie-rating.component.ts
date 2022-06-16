import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie-rating',
  templateUrl: './serie-rating.component.html',
  styleUrls: ['./serie-rating.component.css']
})
export class SerieRatingComponent implements OnInit {

  @Input() serie;

  constructor() { }

  ngOnInit(): void {
  }

}
