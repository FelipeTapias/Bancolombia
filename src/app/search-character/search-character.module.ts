import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchCharacterRoutingModule } from './search-character-routing.module';
import { SearchCharacterComponent } from './search-character.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';


@NgModule({
  declarations: [
    SearchCharacterComponent
  ],
  imports: [
    CommonModule,
    SearchCharacterRoutingModule
  ]
})
export class SearchCharacterModule { }
