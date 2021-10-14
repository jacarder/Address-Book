import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressBookQuery } from '../../state/address-book.query';
import { FilterQuery } from '../../state/filter.query';
import {MatCardModule} from '@angular/material/card';

import { AddressBookComponent } from './address-book.component';

describe('AddressBookComponent', () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule
      ],
      declarations: [ AddressBookComponent ],
      providers: [
        AddressBookQuery,
        FilterQuery
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('should render error message no addresses found', () => {
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('address-book app is running!');
  // });

});
