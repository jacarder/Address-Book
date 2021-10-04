import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface AddressBookState {
   key: string;
}

export function createInitialState(): AddressBookState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'address-book' })
export class AddressBookStore extends Store<AddressBookState> {

  constructor() {
    super(createInitialState());
  }

}
