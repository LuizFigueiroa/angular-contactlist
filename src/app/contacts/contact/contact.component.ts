import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts = [
    {
      name: "",
      phone: ""
    }];

  constructor(private contactsService:ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

}
