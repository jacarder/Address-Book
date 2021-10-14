import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AddressCardComponent } from './address-card.component';
import { AddressEntry, createAddressBookEntry } from '../../state/address-Entry.model';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddressCardComponent', () => {
  let component: AddressCardComponent;
  let fixture: ComponentFixture<AddressCardComponent>;
  let addressEntry: AddressEntry;

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
    component.addressEntry = createAddressBookEntry(addressEntry)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //  Begin testing for mat-card-title
  it('given a name object should render mat-card-title with name', () => {
    component.addressEntry.name.first = "John";
    component.addressEntry.name.last = "Doe";
    fixture.detectChanges();
    const matTitle: Element = fixture.debugElement.nativeElement.querySelector('mat-card-title');
    const actual = 'John Doe';
    const expected = matTitle.innerHTML;
    expect(expected).toBe(actual);
  });
  
  it('given a name object with blank string for first and last namem should render mat-card-title with title "No name on file"', () => {
    component.addressEntry.name.first = '';
    component.addressEntry.name.last = '';
    fixture.detectChanges();
    const matTitle: Element = fixture.debugElement.nativeElement.querySelector('mat-card-title');
    const actual = 'No name on file';
    const expected = matTitle.innerHTML;
    expect(expected).toBe(actual);
  });

  it('given component renders, should only show one mat-card-title', () => {
    const matTitle: Element[] = fixture.debugElement.nativeElement.querySelectorAll('mat-card-title');
    const actual = 1;
    const expected = matTitle.length;
    expect(expected).toBe(actual);
  });  
  //  Begin testing for location
  it('given a location object should render paragraph element with address', () => {
    component.addressEntry.location.street = "text1";
    component.addressEntry.location.city = "text2";
    component.addressEntry.location.state = "text3";
    component.addressEntry.location.postcode = "text4";
    fixture.detectChanges();
    const matContent: Element[] = fixture.debugElement.nativeElement.querySelectorAll('p');
    const actual = 'text1 text2, text3 text4';
    const expected = `${matContent[0].innerHTML} ${matContent[1].innerHTML}`;
    expect(expected).toBe(actual);
  });
  
  it('given a location object with blank string for all properties, should render paragraph element with title "No location on file"', () => {
    component.addressEntry.location.street = "";
    component.addressEntry.location.city = "";
    component.addressEntry.location.state = "";
    component.addressEntry.location.postcode = "";
    fixture.detectChanges();
    const matContent: Element = fixture.debugElement.nativeElement.querySelector('p');
    const actual = 'No location on file';
    const expected = matContent.innerHTML;
    expect(expected).toBe(actual);
  });

});
