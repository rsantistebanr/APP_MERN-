/* import logo from './logo.svg'; */
import React from 'react';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';

function App() {
  return (
  
     <Router> 
       <Navigation/>
      <div className='container pt-5'>
     
      <Routes>
        <Route  path='/'  element={<NotesList/>}/>
        <Route  path='/createNote'  element={<CreateNote/>}/>
        <Route  path='/createUser'  element={<CreateUser/>}/>
        <Route  path='/edit/:id'  element={<CreateNote/>}/>
      </Routes>
      </div>
      
     </Router>
     
  );
}

export default App;

  /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to 
        reload
        Hola soy Robert Santisteban 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
     */