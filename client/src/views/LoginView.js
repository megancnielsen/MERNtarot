import React, { useState } from 'react';
import Axios from "axios";

const INITIALFORM = {
    username: "",
    password: ""
}

const LoginView = () => {
    const [login, setLogin] = useState({...INITIALFORM})

    const handleChange = (e) => {
        setLogin({...login, [e.target.id]:e.target.value});
    }

    const submitHandler = (event) => {
        event.preventDefault();
        Axios.post("/api/AdminLogin/Login", {...login})
            .then(result => { 
                console.log(result.data);
                setLogin(INITIALFORM);  
            })
            .catch(err => console.log("ERROR:", err))

    }

    return(
        <div>
            <form onSubmit={submitHandler} action="POST" className="form-group">
                <div>
                    <label>Username</label>
                    <input type="text" className="form-control" id="username" onChange={handleChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" className="form-control" id="password" onChange={handleChange}/>
                </div>
                <div>
                    <button type="submit" className="btn-primary m-4">Login</button>
                </div>
            </form>
        </div>
    )
};

export default LoginView;