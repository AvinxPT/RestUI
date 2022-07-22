import React, {useState} from 'react';

//script
import isUsernameValid from '../../scripts/validatePw';

//css classes
import classes from './LoginForm.module.css';

const LoginForm = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    
    const submitHandler = (event) =>{
        event.preventDefault();

        isUsernameValid(user, password);
    }

    

    return(
        <form onSubmit={submitHandler}>
            <div className={classes['form-body']}>
                <h1>Login</h1>
                    <label htmlFor="id">ID:</label>
                    <input type="text" name="id" id="id" onChange={event => setUser(event.target.value)} value={user}></input>
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" onChange={event => setPassword(event.target.value)} value={password}></input>
                <br /><input type="submit" value="Login" />
            </div>
        </form>
    );
}

export default LoginForm;