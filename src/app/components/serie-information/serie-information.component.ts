import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces/serie';

@Component({
  selector: 'app-serie-information',
  templateUrl: './serie-information.component.html',
  styleUrls: ['./serie-information.component.css']
})
export class SerieInformationComponent implements OnInit {

  @Input() serie: Serie;

  constructor() { }

  ngOnInit(): void {
  }

}
