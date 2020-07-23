import React, { useState, useContext } from 'react';
import Axios from "axios";

const INITIALFORM = {
    username: "",
    password: ""
}

const LoginView = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const context = useContext(AdminContext);

    const submitHandler = (event) => {
        let data = {email: email, password: password}
        event.preventDefault();
        Axios.post("http://localhost:8000/api/AdminLogin/Login", data)
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
                    <input type="text" className="form-control" id="username" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <button type="submit" className="btn-primary m-4">Login</button>
                </div>
            </form>
        </div>
    )
};

export default LoginView;