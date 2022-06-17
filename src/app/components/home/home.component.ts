import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces/serie';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  series: Serie[];

  constructor(
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(res => this.series = res);
  }

}
