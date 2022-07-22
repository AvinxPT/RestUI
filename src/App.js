import React from 'react';
import './App.css';

//scripts
import isUsernameValid from './scripts/validatePw';

//login components
import LoginForm from './components/LoginComponents/LoginForm';

//nav component
//import Navbar from './components/LoggedIn/UserComponents/Navbar';

//content components
import Employees from './components/LoggedIn/Employees';
import Menus from './components/LoggedIn/Menus';
import Restaurants from './components/LoggedIn/Restaurants';
import Schedule from './components/LoggedIn/Schedule';
import Home from './components/LoggedIn/Home';

function App() {
  var path = window.location.pathname;
  var storedSession = window.localStorage.getItem("auth");

  if(storedSession !== null) {
    let SessionParsed = JSON.parse(storedSession);
    if(isUsernameValid(SessionParsed.name, SessionParsed.password)){
      if(path === "/"){
        return (<Home />);
      } else if (path === "/menus"){
        return(<Menus />);
      } else if (path === "/restaurants"){
        return(<Restaurants />);
      } else if (path === "/schedule"){
        return(<Schedule />);
      } else if (path === "/employees"){
        return(<Employees />);
      }
    }
  }
    return (
      <LoginForm />
    );
}

export default App;
