import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import character from './components/Character';

const App = () => {


  const [namePeople, setNamePeople] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setNamePeople(res.data);
    })
     
    .catch(err => {
      console.error(err)
    })
  }, []);

  const character = namePeople.map(inner => inner.name + inner.height + inner.mass + inner.hair_color + inner.gender)
  return (
    <div className="App">
      <h1 className="Header">character</h1>
      {character}

      </div>
    );
  }
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


export default App;
