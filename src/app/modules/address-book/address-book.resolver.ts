import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AddressBookService } from './state/address-book.service';

@Injectable({
  providedIn: 'root'
})
export class AddressBookResolver implements Resolve<boolean> {
  constructor(private addressBookService: AddressBookService) {
    
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.addressBookService.get().pipe(switchMap(() => of(true)));
  }
}
