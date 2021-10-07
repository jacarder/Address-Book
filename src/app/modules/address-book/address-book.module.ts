import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { AddressBookRoutingModule } from './address-book-routing.module';
import { AddressCardComponent } from './components/address-card/address-card.component';



@NgModule({
  declarations: [
    AddressBookComponent,
    AddressCardComponent
  ],
  imports: [
    CommonModule,
    AddressBookRoutingModule
  ]
})
export class AddressBookModule { }
