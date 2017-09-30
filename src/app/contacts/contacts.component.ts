import { Component, OnInit } from '@angular/core';

import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

contacts = [
  {
    name: "",
    phone: ""
  }
];

  meuinput = "";
  inputName ="";
  inputPhone ="";
  inputEmail ="";

  inserirContact(){
    let contact = {
      name: this.inputName,
      phone: this.inputPhone,
      email: this.inputEmail
    };
    if (this.inputName!="" && this.inputPhone!=""){
      this.contacts.push(contact);
      this.clearForm();
    }else{alert("Obrigatória a digitação do Nome e telefone");}
  }
  clearForm(){
    this.inputName ="";
    this.inputPhone = "";
    this.inputEmail = "";
  }

}
