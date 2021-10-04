import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressBookResolver } from './address-book.resolver';
import { AddressBookComponent } from './components/address-book/address-book.component';

const routes: Routes = [
  {
    path: '',
    component: AddressBookComponent,
    resolve: { addressBookData: AddressBookResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressBookRoutingModule { }
