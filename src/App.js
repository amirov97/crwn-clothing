import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage";
import {Route} from 'react-router'


function App() {
  return (
    <div>
        <Route exact path='/' component={HomePage} />
    </div>
  );
}

export default App;
