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
      network: new FormControl(''),
      image: new FormControl(),
      name: new FormControl(''),
      rating: new FormControl('')
    })
  }

  onSubmit(form: FormGroup) {
    if(!form.valid){
      return;
    }

    const userRating = form.value.name;
    const objectToSend = {
      "id": Math.round(Math.random() * 1000),
      "title": form.value.title,
      "description": form.value.description,
      "network": form.value.network,
      "image": form.value.image,
      "rating":
        {[userRating] : form.value.rating}
    }
    
    this.seriesService.postSerie(objectToSend);
    form.reset();
  }

}
