import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers(prevUsers => ([...prevUsers, {...user, id: Math.random().toString()}]));
  }

  return (
    <div>
      <AddUser userAdded={addUserHandler}/>

      {users.length > 0 && <UsersList users={users}/>}
    </div>
  );
}

export default App;
