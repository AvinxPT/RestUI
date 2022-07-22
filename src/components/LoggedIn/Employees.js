import React from 'react';

//components
import Navbar from './UserComponents/Navbar';

//styling
import classes from './Employees.module.css';

const Employees = () => {
    return(
        <div className={classes.content}>
            <Navbar />
            <h1>Employees Page</h1>
        </div>
    );
}

export default Employees;