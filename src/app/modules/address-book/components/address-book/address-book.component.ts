import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
