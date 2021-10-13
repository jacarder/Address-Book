import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface FilterState extends EntityState<string> {
  addressFilter: {
    filter: string;
  }
}

const initialState = {
  addressFilter: {
    filter: ''
  }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'filter' })
export class FilterStore extends EntityStore<FilterState> {

  constructor() {
    super(initialState);
  }

}
