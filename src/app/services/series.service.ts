import { Injectable } from '@angular/core';
import { Serie } from '../interfaces/serie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private series: Serie[];
  private URL: string = 'http://localhost:3000/series';

  constructor(
    private http: HttpClient
  ) { }

  getSeries(): Observable<any>{
    return this.http.get(this.URL);
  }

  getSeriesByRanking() {
    this.getSeries().subscribe(res => this.series = res);
    return this.series?.map((serie, index) => ({...serie, averageRating: this.addAverageRating()[index]}) );
  }

  addAverageRating() {
    return this.series?.map(o => {
      let ratings = Object.values(o.rating);
      return (ratings.reduce((uno, otro) => uno + otro)) / ratings.length;
    });
  }
}
