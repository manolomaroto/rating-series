import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.css']
})
export class AddSerieComponent implements OnInit {

  serieForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.serieForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      network: new FormControl('')
    })
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Titulo', form.value.title);
    console.log('Descripcion', form.value.description);
    console.log('Plataforma', form.value.network);
  }

}
