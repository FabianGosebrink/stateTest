import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstModule } from './first/first.module';
import { StoreModule, Action, ActionReducerMap } from '@ngrx/store';
import * as fromReducers from './store/reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FirstModule,
    StoreModule.forRoot(fromReducers.mainState)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
