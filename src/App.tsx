import React from 'react';
import './App.css';

import { Contact } from './components/Contact'
import { Details } from './components/Details'

const App: React.FC  = () =>{
  return (
    <div className="App">
         <section className = "left-content">
              <Contact />
         </section>
         <section className = "right-content">
              <Details />
         </section>
    </div>
  );
}

export default App;
