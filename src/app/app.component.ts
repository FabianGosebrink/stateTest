import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromReducers from './store/reducers';
import * as fromSelectors from './store/selectors/main.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromReducers.MainState>) {}

  ngOnInit() {
    this.store
      .pipe(select(fromSelectors.getCustomerList))
      .subscribe((customerList: any[]) =>
        console.log('getCustomerList', customerList)
      );

    this.store
      .select<any>((state: any) => state) // the complete state this time!!!
      .subscribe((completeState: any) =>
        console.log('completeState', completeState)
      );
  }
}
