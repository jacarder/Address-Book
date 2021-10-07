import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { AddressBookRoutingModule } from './address-book-routing.module';
import { AddressCardComponent } from './components/address-card/address-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AddressBookComponent,
    AddressCardComponent
  ],
  imports: [
    CommonModule,
    AddressBookRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AddressBookModule { }
