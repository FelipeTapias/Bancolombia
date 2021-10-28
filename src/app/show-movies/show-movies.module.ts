import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowMoviesRoutingModule } from './show-movies-routing.module';
import { ShowMoviesComponent } from './show-movies.component';


@NgModule({
  declarations: [
    ShowMoviesComponent
  ],
  imports: [
    CommonModule,
    ShowMoviesRoutingModule
  ]
})
export class ShowMoviesModule { }
