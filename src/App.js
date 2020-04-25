import React, { Component } from "react";

import "./App.css";
import faker from 'faker';

import Contacts from "./Contacts.jsx";



class App extends Component {

  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
  }

  state = {
    contacts: [{
      name: faker.name.firstName() + " " + faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
    },{
      name: faker.name.firstName() + " " + faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
    },{
      name: faker.name.firstName() + " " + faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
    },{
      name: faker.name.firstName() + " " + faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
    },{
      name: faker.name.firstName() + " " + faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
    }]
  }

  addContact(contact) {
    console.log(contact);

    const {contacts} = this.state;
    contacts.push(contact);

    this.setState({
      contacts: contacts
    });
  }


  render() {
    return (
      <div className="App">
        <Contacts addContact={this.addContact} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
