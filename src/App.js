import React from 'react';
import {ContactsProvider} from './components/Contacts';
import {Header} from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <div className="App">

        <Header branding={'Contact manager'}/>
        <div className="container">
            <ContactsProvider />
        </div>

    </div>
  );
}

export default App;
