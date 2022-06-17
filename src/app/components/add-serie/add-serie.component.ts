import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.css']
})
export class AddSerieComponent implements OnInit {

  serieForm: FormGroup;

  constructor(
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {
    this.serieForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      network: new FormControl('')
    })
  }

  onSubmit(form: FormGroup) {
    this.seriesService.postSerie({
      "id": 3,
      "title": "Treme",
      "description": "Estamos en Nueva Orleans, 3 años antes del Katrina",
      "network": "HBO",
      "image": "https://static.episodate.com/images/tv-show/full/21612.jpg",
      "rating": {
        "Luis": 8,
        "Ana": 9
      }
    })
    /* console.log('Valid?', form.valid); // true or false
    console.log('Titulo', form.value.title);
    console.log('Descripcion', form.value.description);
    console.log('Plataforma', form.value.network); */
  }

}
