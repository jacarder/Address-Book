import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AddressBookStore, AddressBookState } from './address-book.store';

@Injectable({ providedIn: 'root' })
export class AddressBookQuery extends Query<AddressBookState> {

  constructor(protected store: AddressBookStore) {
    super(store);
  }

}
