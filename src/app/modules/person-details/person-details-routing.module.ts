import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailsComponent } from './components/person-details/person-details.component';

const routes: Routes = [
  {
    path: '',
    component: PersonDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PersonDetailsRoutingModule { }
