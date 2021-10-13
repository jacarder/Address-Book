import { Injectable } from '@angular/core';
import { FilterState, FilterStore } from './filter.store';

@Injectable({ providedIn: 'root' })
export class FilterService {
    constructor(private filterStore: FilterStore) { }

    updateFilter(filter: string) {
      let addressFilter: FilterState = {
        addressFilter: {
            filter: filter
        }
      }
      this.filterStore.update(addressFilter);
    }

}