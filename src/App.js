import React, { useState } from "react";
import UserInput from "./components/User/UserInput/UserInput";
import classes from "./App.module.css";
import UserList from "./components/User/UserList/UserList";
import ErrorModal from "./components/UI/ErrorModal";


function App() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);
  const addUser = (data) => {
    if (data.name.trim().length === 0 || data.age.trim().length === 0) {
      setError((prevst) => {
        return !prevst;
      });
      return;
    } else {
      setUser((prevst) => {
        return prevst.concat(data);
      });
    }
  };

  const closeHandler =()=>{
    setError(false)
  }
 

  return (
    <React.Fragment>
      {error && <ErrorModal close={closeHandler} /> }
      <div classes={classes.visible}>
      <section className={classes.userInput}>
        <UserInput addUser={addUser} />
      </section>
      <section className={classes.userInput}>
        <UserList users={user} />
      </section>
    </div>
    </React.Fragment>
  );
}

export default App;
