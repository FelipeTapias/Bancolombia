import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedStorageRoutingModule } from './saved-storage-routing.module';
import { SavedStorageComponent } from './saved-storage.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SavedStorageComponent
  ],
  imports: [
    CommonModule,
    SavedStorageRoutingModule,
    ReactiveFormsModule
  ]
})
export class SavedStorageModule { }
