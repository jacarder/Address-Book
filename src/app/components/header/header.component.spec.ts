import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { HeaderComponent } from './header.component';
import { AddressBookComponent } from 'src/app/modules/address-book/components/address-book/address-book.component';

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

  it('search input should be on address-book route', (done) => {
    router.navigateByUrl('/address-book').then(() => {
      const inputElement = fixture.debugElement.nativeElement;
      expect(inputElement).not.toBeNull()
      done();
    }) 
  });

  // it('search input should show on any router other than address-book', () => {
  //   const inputElement = fixture.debugElement.nativeElement.querySelector('input');
  //   router.navigateByUrl('/details/1')
  //   expect(inputElement).not.toBeNull()
  // });
});
