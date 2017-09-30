import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

   constructor() {}

  getContacts(){
      return this.contacts;
  }

  contacts = [
    {
      name: "Luiz Figueiroa",
      phone: "9999999",
      email: "lhaf@hotmail.com"
    }];
}
