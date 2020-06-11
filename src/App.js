import React from 'react';
import {ContactsProvider} from './components/contacts/Contacts';
import {Header} from './components/layout/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {AddContactForm} from "./components/contacts/AddContact";



function App() {
  return (
    <div className="App">

        <Header branding={'Contact manager'}/>
        <div className="container">
            <AddContactForm />
            <ContactsProvider />
        </div>

    </div>
  );
}

export default App;
