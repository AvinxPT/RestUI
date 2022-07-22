import React from 'react';
import './App.css';

//scripts
import isUsernameValid from './scripts/validatePw';

//login components
import LoginForm from './components/LoginComponents/LoginForm';

//content components
import Employees from './components/LoggedIn/Employees';
import Menus from './components/LoggedIn/Menus';
import Restaurants from './components/LoggedIn/Restaurants';
import Schedule from './components/LoggedIn/Schedule';

function App() {
  var path = window.location.pathname;
  var storedSession = window.localStorage.getItem("auth");

  if(storedSession !== null) {
    let SessionParsed = JSON.parse(storedSession);
    if(isUsernameValid(SessionParsed.name, SessionParsed.password)){
      if(path === "/employees"){
        return (<Employees />);
      } else if (path === "/menus"){
        return(<Menus />);
      } else if (path === "/restaurants"){
        return(<Restaurants />);
      } else if (path === "/schedule"){
        return(<Schedule />);
      }
    }
  }
    return (
      <LoginForm />
    );
}

export default App;
