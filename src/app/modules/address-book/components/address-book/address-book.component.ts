import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AddressBookQuery } from '../../state/address-book.query';
import { FilterQuery } from '../../state/filter.query';

@Component({
  selector: 'address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBookComponent implements OnInit {

  addressList$ = combineLatest([
    this.filterQuary.selectFilter(), 
    this.addressBookQuery.selectAddresses()
  ]).pipe(
    switchMap(([filter, addresses]) => {
      return of(
        addresses.filter(
          item => 
          item.location.street.toLocaleLowerCase().includes(filter) ||
          item.location.city.toLocaleLowerCase().includes(filter) ||
          item.location.state.toLocaleLowerCase().includes(filter)
        )
      );
    })
  )
  loading$ = this.addressBookQuery.selectLoading();

  constructor(private addressBookQuery: AddressBookQuery, private filterQuary: FilterQuery) { }
  
  ngOnInit(): void {

  }

}
