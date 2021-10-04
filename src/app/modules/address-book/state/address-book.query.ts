import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { AddressBookStore, AddressBookState } from './address-book.store';
import { AddressEntry } from './address-Entry.model';

@Injectable({ providedIn: 'root' })
export class AddressBookQuery extends Query<AddressBookState> {

  constructor(protected store: AddressBookStore) {
    super(store);
  }

  selectAddresses(): Observable<any> {
    return this.select(state => state.addresses);
  }

  getAddresses(): AddressEntry[] {
    return this.getValue().addresses;
  }

}
