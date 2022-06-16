import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  series: Object[];

  constructor(
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {
    this.series = this.seriesService.getSeries();
    this.seriesService.addAverageRating();
  }

}
