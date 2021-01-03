import React from 'react';
import logo from './logo.svg';
import Menu from '../Menu/Menu';
import './App.css';
import PeopleList from '../People/PeopleList';

function App() {
  return (
    <div className="App">
      <Menu/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />    
        <PeopleList/>
      </header> */}
    </div>
  );
}

export default App;
