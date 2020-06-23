import React from 'react';
import './App.css';

import { Contact } from './components/Contact'
import { Details } from './components/Details'

const App: React.FC  = () =>{
  return (
    <div className="App">
         <div className = "left-content">
              <Contact />
         </div>
         <div className = "right-content">
              <Details />
         </div>
    </div>
  );
}

export default App;
