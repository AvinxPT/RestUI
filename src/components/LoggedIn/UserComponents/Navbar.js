import React from 'react';

//css
import classes from './Navbar.module.css';

const Navbar = (props) => {
    
    return(
        <nav className={classes.nav}>
            <ul>
                <li className={classes.welcome}>Welcome {props.user}</li>
                <li href="/Restaurants">Restaurants</li>
                <li href="/Employees">Employees</li>
                <li href="/Schedule">Schedule</li>
                <li href="/Menus">Menus</li>
            </ul>
        </nav>
    );
}

export default Navbar;