import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { AddressBookRoutingModule } from './address-book-routing.module';



@NgModule({
  declarations: [
    AddressBookComponent
  ],
  imports: [
    CommonModule,
    AddressBookRoutingModule
  ]
})
export class AddressBookModule { }
