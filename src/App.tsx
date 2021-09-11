import React from 'react';
import logo from './logo.svg';
import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import { movieDTO } from './movies/movies.model';

function App() {
  const testMovie : movieDTO = {
    id : 1,
    title : 'Spider-Man : Far From Home',
    poster:'https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
  }
  return (
    <>
      <IndividualMovie {...testMovie}/> 
    </>
  );
}

export default App;
