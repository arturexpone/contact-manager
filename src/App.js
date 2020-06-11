import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Header} from './components/layout/Header';
import {ContactsProvider} from './components/contacts/Contacts';
import {About} from "./components/pages/About";
import {AddContactForm} from "./components/contacts/AddContact";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';





function App() {
  return (
      <Router>
        <div className="App">

            <Header branding={'Contact manager'}/>
            <div className="container">
                <Switch>
                    <Route exact path='/' component={ContactsProvider} />
                    <Route exact path='/contact/add' component={AddContactForm} />
                    <Route exact path='/about' component={About} />
                </Switch>
            </div>

        </div>
      </Router>
  );
}

export default App;
