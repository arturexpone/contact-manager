import React from 'react';
import './App.css';
import {Contact} from './components/Contact';
import {Header} from './components/Header';

function App() {
  return (
    <div className="App">
        <Header branding={'Contact manager'}/>
        <Contact name={'John Doe'} email={'jdoe@gmail.com'} phone={'555-555-5555'}/>
        <Contact name={'Karen Smith'} email={'karen@gmail.com'} phone={'333-333-3333'}/>
    </div>
  );
}

export default App;
