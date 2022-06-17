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
    if(!form.valid){
      return;
    }
    this.seriesService.postSerie({
      "id": Math.round(Math.random() * 1000),
      "title": form.value.title,
      "description": form.value.description,
      "network": form.value.network,
      "image": "https://static.episodate.com/images/tv-show/full/21612.jpg",
      "rating": {
        "Luis": 8,
        "Ana": 9
      }
    });
    form.reset();
    /* console.log('Valid?', form.valid); // true or false
    console.log('Titulo', form.value.title);
    console.log('Descripcion', form.value.description);
    console.log('Plataforma', form.value.network); */
  }

}
