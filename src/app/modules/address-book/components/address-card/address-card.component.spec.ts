import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AddressCardComponent } from './address-card.component';
import { createAddressBookEntry } from '../../state/address-Entry.model';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddressCardComponent', () => {
  let component: AddressCardComponent;
  let fixture: ComponentFixture<AddressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatButtonModule,
        RouterTestingModule 
      ],
      declarations: [ AddressCardComponent ]    
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressCardComponent);
    component = fixture.componentInstance;
    let addressEntry = {
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
    component.addressEntry = createAddressBookEntry(addressEntry)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
