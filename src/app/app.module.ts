import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressBookService } from './modules/address-book/state/address-book.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './components/header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (addressBookService: AddressBookService) => 
      () => addressBookService.get().toPromise(),
      deps: [AddressBookService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
