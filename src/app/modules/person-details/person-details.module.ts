import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonDetailsRoutingModule } from './person-details-routing.module';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    PersonDetailsComponent
  ],
  imports: [
    CommonModule,
    PersonDetailsRoutingModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ]
})
export class PersonDetailsModule { }
