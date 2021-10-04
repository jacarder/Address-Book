import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'address-book',
    loadChildren: () => import('./modules/address-book/address-book-routing.module').then(m => m.AddressBookRoutingModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./modules/person-details/person-details.module').then(m => m.PersonDetailsModule)
  }
  //  TODO add default path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
