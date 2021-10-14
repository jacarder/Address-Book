import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { HeaderComponent } from './header.component';
import { AddressBookComponent } from 'src/app/modules/address-book/components/address-book/address-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(
          [
            {path: 'address-book', component: AddressBookComponent},
            {path: 'detail', component: AddressBookComponent},
          ]
        )
      ],
      declarations: [ 
        HeaderComponent,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //  Begin testing search bar
  it('search input should be on address-book route', (done) => {
    router.navigateByUrl('/address-book').then(() => {
      fixture.detectChanges();
      const inputElement = fixture.debugElement.nativeElement.querySelector('input');
      expect(inputElement).not.toBeNull()
      done();
    }) 
  });
  //  Begin testing home button  
  it('Address Book home button should route to "/address-book" route', fakeAsync(() => {
    const button = fixture.debugElement.nativeElement.querySelector('#home-button');
    button.click();
    tick();
    const actual = '/address-book';
    const expected = router.url;
    fixture.whenStable().then(() => {
      expect(expected).toBe(actual);
    });    
  }));  
});
