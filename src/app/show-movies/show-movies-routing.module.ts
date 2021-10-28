import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowMoviesComponent } from './show-movies.component';

const routes: Routes = [
  { path: '', component: ShowMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowMoviesRoutingModule { }
