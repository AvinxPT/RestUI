import React from 'react';

//styling
import classes from './Restaurants.module.css';

//components
import Navbar from './UserComponents/Navbar';

const Restaurants = () => {
    return(
        <div className={classes.content}>
            <Navbar />
            <h1>Restaurant Page</h1>
        </div>
    );
}

export default Restaurants;