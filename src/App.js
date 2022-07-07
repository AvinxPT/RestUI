import React, {useState} from 'react';
import './App.css';

//login components
import LoginForm from './components/LoginComponents/LoginForm';

function App() {
  
  //Hardcoded info
  const hardcodedUser = {
    id:"user@user.com",
    password:"password123"
  }

  //login states
  const [user, setUser] = useState({id: "", password: ""});
  const [error, setError] = useState(false);


  //Login-Logout calls
  const Login = (props) => {
    //console.log(props);
    //console.log(hardcodedUser);

    if(props.id === hardcodedUser.id && props.password === hardcodedUser.password){
      console.log("Logged in");
      setError(false);
      setUser({
        id:props.id,
        password:props.password
      })
    } else {
      setError(true);
      console.log("Incorrect Login details");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({
      id:"",
      password:""
    })
  }
  
  return (
    <div>
      
      {(user.id !== "") ? (
        <div>
          <h1>You are Logged IN</h1>
          <button onClick={Logout}>LOGOUT</button>
        </div>
      ) : (
      <LoginForm login={Login} />
      )}
      
      {error === true ? <p>Incorrect Login Details</p> : ""}
    
    </div>
  );
}

export default App;
