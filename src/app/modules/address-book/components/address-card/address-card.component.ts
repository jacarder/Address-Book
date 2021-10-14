import { Component, Input, OnInit } from '@angular/core';
import { AddressEntry } from '../../state/address-Entry.model';

@Component({
  selector: 'address-card[addressEntry]',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent implements OnInit {

  @Input() addressEntry: AddressEntry;

  constructor() { }

  ngOnInit(): void {
  }

}
