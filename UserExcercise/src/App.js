import React, { useState, Fragment } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';
import Wrapper from './Components/Helpers/Wrapper';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
      setUsersList((prevUsersList) => {
        return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
      });
  };

  return (
    /*<Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList}/>
    </Wrapper>*/
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList}/>
  </Fragment>
  );
}

export default App;
