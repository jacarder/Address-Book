import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AddressBookQuery } from '../../state/address-book.query';
import { AddressBookService } from '../../state/address-book.service';
import { AddressBookState } from '../../state/address-book.store';

@Component({
  selector: 'address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBookComponent implements OnInit {

  loading$ = this.addressBookQuery.selectLoading();

  constructor(private addressBookQuery: AddressBookQuery) { }
  
  ngOnInit(): void {
    this.addressBookQuery.selectAddresses().pipe(
      tap((results) => {
        console.log("made it", results)
      })
    ).subscribe()

  }

}
