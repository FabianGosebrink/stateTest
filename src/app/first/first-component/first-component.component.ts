import { Component, OnInit } from '@angular/core';
import * as fromSelectors from '../store/selectors/first.selectors';
import * as fromReducers from '../store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  foods$: Observable<any[]>;
  constructor(private store: Store<fromReducers.FirstState>) {}

  ngOnInit() {
    this.store
      .select(fromSelectors.getItemsLoaded)
      .subscribe((featureState: any) =>
        console.log('featureState', featureState)
      );
  }
}
