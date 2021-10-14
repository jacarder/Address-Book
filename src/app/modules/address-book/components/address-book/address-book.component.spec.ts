import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressBookQuery } from '../../state/address-book.query';
import { FilterQuery } from '../../state/filter.query';
import {MatCardModule} from '@angular/material/card';

import { AddressBookComponent } from './address-book.component';
import { of } from 'rxjs';
import { AddressEntry, createAddressBookEntry } from '../../state/address-Entry.model';
import { AddressBookState, AddressBookStore } from '../../state/address-book.store';
import { AddressBookService } from '../../state/address-book.service';
import { FilterService } from '../../state/filter.service';
import { FilterStore } from '../../state/filter.store';
import { AddressCardComponent } from '../address-card/address-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddressBookComponent', () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;
  let addressBookStore: AddressBookStore;
  let filterStore: FilterStore;
  let filterService: FilterService;
  let addressEntry: AddressEntry;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        RouterTestingModule
      ],
      declarations: [ AddressBookComponent, AddressCardComponent ],
      providers: [
        AddressBookService,
        FilterService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookComponent);
    component = fixture.componentInstance;
    addressBookStore = TestBed.inject(AddressBookStore);
    filterStore = TestBed.inject(FilterStore);
    filterService = TestBed.inject(FilterService);
    addressEntry = {
      id: '',
      name: {
        first: '',
        last: ''
      },
      location: {
        street: '',
        city: '',
        state: '',
        postcode: '',
      },
      email: '',
      phone: '',
      cell: '',
      picture: {
        large: '',
        medium: '',
        thumbnail: ''
      } 
    }  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //  Begin test cards
  it('given no addresses, should render error message no addresses found', () => {
    addressBookStore.update({addresses: []})
    fixture.detectChanges();
    const matCard: Element = fixture.debugElement.nativeElement.querySelector('mat-card');
    const actual = 'No addresses found with search result';
    const expected = matCard.innerHTML;
    expect(expected).toBe(actual);
  });

  it('given two address, should render two address-cards', () => {
    let addressBookState: AddressBookState = {
      addresses: [addressEntry, addressEntry]
    }
    addressBookStore.update(addressBookState);      
    fixture.detectChanges();
    const cards: Element[] = fixture.debugElement.nativeElement.querySelectorAll('address-card');
    const actual = 2;
    const expected = cards.length;
    expect(expected).toEqual(actual);
  });  
  
  it('given filter "1" and two addresses, should render one address-card with street "123"', () => {
    addressEntry.location.street = "333"
    let address1 = JSON.parse(JSON.stringify(addressEntry));
    addressEntry.location.street = "123"
    let address2 = JSON.parse(JSON.stringify(addressEntry));
    let addressBookState: AddressBookState = {
      addresses: [address1, address2]
    }
    filterService.updateFilter("1");
    addressBookStore.update(addressBookState);      
    fixture.detectChanges();
    const cards: Element[] = fixture.debugElement.nativeElement.querySelectorAll('address-card');
    const actual = 1;
    const expected = cards.length;
    expect(expected).toEqual(actual);
  });    
});
