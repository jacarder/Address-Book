import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { FilterState, FilterStore } from './filter.store';

@Injectable({ providedIn: 'root' })
export class FilterQuery extends Query<FilterState> {

  constructor(protected store: FilterStore) {
    super(store);
  }

  selectFilter(): Observable<string> {
    return this.select(state => state.addressFilter.filter.toLocaleLowerCase());
  }

}
