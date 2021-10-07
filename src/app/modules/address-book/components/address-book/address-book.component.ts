import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AddressBookQuery } from '../../state/address-book.query';

@Component({
  selector: 'address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBookComponent implements OnInit {

  addressList$ = this.addressBookQuery.selectAddresses()
  loading$ = this.addressBookQuery.selectLoading();

  constructor(private addressBookQuery: AddressBookQuery) { }
  
  ngOnInit(): void {

  }

}
