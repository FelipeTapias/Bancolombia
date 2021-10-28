import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedStorageComponent } from './saved-storage.component';

const routes: Routes = [
  { path: '', component: SavedStorageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedStorageRoutingModule { }
