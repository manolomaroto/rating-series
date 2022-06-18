import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SeriesService } from 'src/app/services/series.service';
@Component({
  selector: 'app-serie-rating',
  templateUrl: './serie-rating.component.html',
  styleUrls: ['./serie-rating.component.css']
})
export class SerieRatingComponent implements OnInit {

  @Input() serie;
  ratingForm: FormGroup;
  showForm = false;

  constructor(
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {
    this.ratingForm = new FormGroup({
      name: new FormControl(''),
      rating: new FormControl('')
    })
  }

  onSubmit(form: FormGroup){
   
    const userRating = form.value.name;
    const objectToSend = {
      "id": this.serie.id,
      "title": this.serie.title,
      "description": this.serie.description,
      "network": this.serie.network,
      "image": this.serie.image,
      "rating":
        {...this.serie.rating, [userRating] : form.value.rating}
    }
    
    this.seriesService.putSerie(objectToSend);
    form.reset();
    this.showForm = false;
  }

  onToggleForm() {
    this.showForm = !this.showForm;
  }

}
