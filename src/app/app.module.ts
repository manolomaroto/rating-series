import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddSerieComponent } from './components/add-serie/add-serie.component';
import { ShowTopComponent } from './components/show-top/show-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddSerieComponent,
    ShowTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
