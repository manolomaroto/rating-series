import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddSerieComponent } from './components/add-serie/add-serie.component';
import { ShowTopComponent } from './components/show-top/show-top.component';
import { SerieRatingComponent } from './components/serie-rating/serie-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddSerieComponent,
    ShowTopComponent,
    SerieRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
