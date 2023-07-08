import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Datarow from './component/Datarow';
import StackedTitle from './component/StackedTitle';

function App() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const login = btoa("maria:pass");
    axios.get('https://localhost/', {
      headers: {
        'Authorization': `Basic ${login}`
      }
    })
    .then(response => setUsers(response.data))
  }, []);

  return (
    
    <div className="App">
      <header className="App-header">
        <StackedTitle title="Axios api with express basicAuth and ssl mysql"/>
        {users.map((user, index) =>
        (
         <Datarow dataFieldId={user.id} dataFieldBreed={user.breed} 
          dataFieldColor={user.color}/>
        ))}
      </header>
    </div>
  );
}

export default App;

