import React from 'react';

//styling
import classes from './Schedule.module.css';

//components
import Navbar from './UserComponents/Navbar';

const Schedule = () => {
    return(
        <div className={classes.content}>
            <Navbar />
            <h1>Schedule Page</h1>
        </div>
    );
}

export default Schedule;