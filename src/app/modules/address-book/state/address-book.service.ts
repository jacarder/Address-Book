import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IRandomUserResponse } from '../models/randomuser.model';
import { AddressEntry, createAddressBookEntry } from './address-Entry.model';
import { AddressBookState, AddressBookStore } from './address-book.store';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  constructor(private addressBook: AddressBookStore, private http: HttpClient) {
  }


  get(): Observable<AddressEntry[]> {
    this.addressBook.setLoading(true);
    return this.http.get<IRandomUserResponse>("https://randomuser.me/api/?results=10").pipe(
      map((list: IRandomUserResponse) => {
        return list.results.map(entry => {
          let newEntry = {
            id: entry.login.uuid,
            name: {
              first: entry.name.first,
              last: entry.name.last
            },
            location: {
              street: entry.location.street,
              city: entry.location.city,
              state: entry.location.state,
              postcode: entry.location.postcode
            },
            email: entry.email,
            phone: entry.phone,
            cell: entry.cell,
            picture: {...entry.picture},            
          }
          return createAddressBookEntry(newEntry)
        })
      }),
      tap(
        (entities: AddressEntry[]) => {
          let addressBookState: AddressBookState = {
            addresses: entities
          }
          this.addressBook.update(addressBookState);
          this.addressBook.setLoading(false);
        }
      ),
      catchError(
        (error) => {
          this.addressBook.setError(error);
          this.addressBook.setLoading(false);
          throw error;
        }
      )
    )
  }

  add(address: AddressEntry) {
    this.addressBook.add(address);
  }

  // update(id, friend: Partial<Friend>) {
  //   this.addressBook.update(id, friend);
  // }

  remove(id: number) {
    this.addressBook.remove(id);
  }
}
