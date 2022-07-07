import React, {useState} from 'react';

const LoginForm = ({login}) => {
    //local storaged login details
    const [loginDetails, setLoginDetails] = useState({id:"",password:""});
    
    const submitHandler = (event) =>{
        event.preventDefault();

        login(loginDetails);
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <h1>Login</h1>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input type="text" name="id" id="id" onChange={event => setLoginDetails({...loginDetails,id:event.target.value})} value={loginDetails.id}></input>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" onChange={event => setLoginDetails({...loginDetails,password:event.target.value})} value={loginDetails.password}></input>
                </div>
                <input type="submit" value="Login" />
            </div>
        </form>
    );
}

export default LoginForm;