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
    this.seriesService.getSeries().subscribe(res => {
      this.series = res.map((serie, index) => ({...serie, averageRating: res.map(o => {
        let ratings = Object.values(o.rating);
        return ((<number>ratings.reduce((previous: number, current: number) => +previous + +current)) / ratings.length).toFixed(1);
      })[index]}) );
    });
  }


}
