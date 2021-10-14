import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AddressCardComponent } from './address-card.component';
import { AddressEntry, createAddressBookEntry } from '../../state/address-Entry.model';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AddressBookComponent } from '../address-book/address-book.component';
import { PersonDetailsComponent } from 'src/app/modules/person-details/components/person-details/person-details.component';
import { CommonModule } from '@angular/common';

describe('AddressCardComponent', () => {
  let component: AddressCardComponent;
  let fixture: ComponentFixture<AddressCardComponent>;
  let addressEntry: AddressEntry;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        RouterTestingModule.withRoutes(
          [
            {path: 'address-book', component: AddressBookComponent},
            {path: 'details/:id', component: PersonDetailsComponent},
          ]
        )        
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
    router = TestBed.inject(Router)
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
    const matConent: Element = fixture.debugElement.nativeElement.querySelector('p');
    const actual = 'No location on file';
    const expected = matConent.innerHTML;
    expect(expected).toBe(actual);
  });
  //  Begin testing button view details
  it('View Detail button should route to "/details" route', fakeAsync(() => {
    component.addressEntry.id = "1111";
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    const actual = '/details/1111';
    const expected = router.url;
    fixture.whenStable().then(() => {
      expect(expected).toBe(actual);
    });    
  }));

});
