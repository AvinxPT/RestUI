import React from 'react';

//css
import classes from './Navbar.module.css';

const Navbar = () => {
    
    return(
        <nav className={classes.nav}>
            <ul>
                <li className={classes.welcome}>Welcome</li>
                <li><a href="/restaurants">Restaurants</a></li>
                <li><a href="/employees">Employees</a></li>
                <li><a href="/schedule">Schedule</a></li>
                <li><a href="/menus">Menus</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;