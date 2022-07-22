import React from 'react';

//styling
import classes from './Menus.module.css';

//components
import Navbar from './UserComponents/Navbar';

const Menus = () => {
    return(
        <div className={classes.content}>  
            <Navbar />
            <h1>Menus Page</h1>
        </div>
    );
}

export default Menus;