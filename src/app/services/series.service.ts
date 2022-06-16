import { Injectable } from '@angular/core';
import { Serie } from '../interfaces/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  series: Serie[] = [
    {
      title: 'Los Soprano',
      description: 'Serie sobre mafiosos de Nueva Jersey',
      network: 'HBO',
      image: 'https://static.episodate.com/images/tv-show/full/6138.jpg',
      rating: [
        {'Luis': 7},
        {'Ana': 9}
      ]
    },
    {
      title: 'Treme',
      description: 'Estamos en Nueva Orleans, 3 años antes del Katrina',
      network: 'HBO',
      image:'https://static.episodate.com/images/tv-show/full/21612.jpg',
      rating: [
        {'Luis': 9},
        {'Ana': 5}
      ]
    }
  ]

  constructor() { }

  getSeries() {
    return this.series;
  }

  getSeriesByRanking() {
    
  }

  addAverageRating() {
    this.series.map(o => console.log(o.rating));
  }
}
