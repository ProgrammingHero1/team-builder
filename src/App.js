import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect( () =>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res =>  res.json())
    .then(data => setUsers(data.results))
  }, [])
  const addMember = (name) => {
    const exists = team.find(m => m === name);
      if(!exists){
        setTeam([...team, name])
      }
  }
  
  return (
    <div>
        <h1>Team Builder</h1>
        <ul>
          {
            team.map((m, idx) => <li key={idx}>{m}</li>)
          }
        </ul>
        {
          users.map(user => <User user={user} addMember={addMember} key={user.phone}></User>)
        }
    </div>
  );
}

export default App;
