import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressBookQuery } from 'src/app/modules/address-book/state/address-book.query';

@Component({
  selector: 'person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonDetailsComponent implements OnInit {

  addressEntry$ = this.addressBookQuery.selectAddressById(this.route.snapshot.params.id);

  constructor(private route: ActivatedRoute, private addressBookQuery: AddressBookQuery) { }

  ngOnInit(): void {
    
  }

}
