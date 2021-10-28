import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  { path: 'movies', loadChildren: () => import('./show-movies/show-movies.module').then((m) => m.ShowMoviesModule)  },
  { path: 'search', loadChildren: () => import('./search-character/search-character.module').then((m) => m.SearchCharacterModule), canActivate:[AuthGuard] },
  { path: 'storage', loadChildren: () => import('./saved-storage/saved-storage.module').then((m) => m.SavedStorageModule) },
  { path: '**', redirectTo: 'movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
