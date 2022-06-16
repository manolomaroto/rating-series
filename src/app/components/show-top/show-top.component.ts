import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { Serie } from 'src/app/interfaces/serie';

@Component({
  selector: 'app-show-top',
  templateUrl: './show-top.component.html',
  styleUrls: ['./show-top.component.css']
})
export class ShowTopComponent implements OnInit {

  series: Serie[]

  constructor(
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {
    this.series = this.seriesService.getSeriesByRanking();
    console.log(this.series);
  }

}
