import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";

import './App.scss';

import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Main />
      </Router>
    </div>
  );
}

export default App;
