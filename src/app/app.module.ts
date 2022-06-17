import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddSerieComponent } from './components/add-serie/add-serie.component';
import { ShowTopComponent } from './components/show-top/show-top.component';
import { SerieRatingComponent } from './components/serie-rating/serie-rating.component';
import { SerieInformationComponent } from './components/serie-information/serie-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddSerieComponent,
    ShowTopComponent,
    SerieRatingComponent,
    SerieInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
