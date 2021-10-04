export interface AddressEntry {
  id: string,
  name: {
    first: string,
    last: string
  },
  location: {
    street: string,
    city: string,
    state: string,
    postcode: string,
  },
  email: string,
  phone: string,
  cell: string,
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  }  
}

export function createAddressBookEntry(params: Partial<AddressEntry>) {
  return {
    ...params
  } as AddressEntry;
}
