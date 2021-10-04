import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonDetailsRoutingModule } from './person-details-routing.module';



@NgModule({
  declarations: [
    PersonDetailsComponent
  ],
  imports: [
    CommonModule,
    PersonDetailsRoutingModule
  ]
})
export class PersonDetailsModule { }
