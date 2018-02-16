import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component/first-component.component';
import { StoreModule } from '@ngrx/store';
import * as fromReducers from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('first', fromReducers.reducers)
  ],
  declarations: [FirstComponentComponent],
  exports: [FirstComponentComponent]
})
export class FirstModule {}
