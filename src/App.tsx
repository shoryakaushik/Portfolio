import React from 'react';
import './App.css';

import { Contact } from './components/Contact'
const App: React.FC  = () =>{
  return (
    <div className="App">
         <div className = "left-content">
              <Contact />
         </div>
         <div className = "right-content">
              detils
         </div>
    </div>
  );
}

export default App;
