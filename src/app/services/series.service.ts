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

  getSeries(): Observable<any> {
    return this.http.get<Serie[]>(this.URL);
  }

  postSerie(serie: Serie) {
    this.http.post(this.URL,serie).subscribe(data => {
      console.log(data)
  });
  }

  putSerie(serie: Serie) {
    const serieUpdateUrl = this.URL + "/" + serie.id;
    this.http.put(serieUpdateUrl,serie).subscribe(data => {
      console.log(data)
  });
  }

}
