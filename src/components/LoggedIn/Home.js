import React from 'react';

//components
import Navbar from './UserComponents/Navbar';

//styling
import classes from './Home.module.css';

const Home = () => {
    return(
        <div className={classes.content}>
            <Navbar />
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;