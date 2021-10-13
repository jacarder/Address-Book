import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AddressBookStore, AddressBookState } from './address-book.store';
import { AddressEntry } from './address-Entry.model';

@Injectable({ providedIn: 'root' })
export class AddressBookQuery extends Query<AddressBookState> {

  constructor(protected store: AddressBookStore) {
    super(store);
  }

  selectAddresses(): Observable<AddressEntry[]> {
    return this.select(state => state.addresses);
  }

  getAddresses(): AddressEntry[] {
    return this.getValue().addresses;
  }

  selectAddressById(id: string): Observable<AddressEntry> {
    return this.select(state => state.addresses).pipe(
      switchMap(addresses => addresses.filter(item => item.id === id))
    );
  }

}
