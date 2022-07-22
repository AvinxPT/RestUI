const isUsernameValid = (username, password) => {
    
    if(username === "user@user.com" && password === "password123"){
        console.log(username,password);
        window.localStorage.setItem("auth", JSON.stringify({name:username,password:password}));
        return true;
    } else {
        return false;
    }
}

export default isUsernameValid;