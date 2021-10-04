import { TestBed } from '@angular/core/testing';

import { AddressBookResolver } from './address-book.resolver';

describe('AddressBookResolver', () => {
  let resolver: AddressBookResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AddressBookResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
