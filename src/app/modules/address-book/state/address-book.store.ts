import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { AddressEntry } from './address-Entry.model';

export interface AddressBookState extends EntityState<AddressEntry> {
  addresses: AddressEntry[]
}

const initialState = {
  addresses: []
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'address-book' })
export class AddressBookStore extends EntityStore<AddressBookState> {

  constructor() {
    super(initialState);
  }

}
