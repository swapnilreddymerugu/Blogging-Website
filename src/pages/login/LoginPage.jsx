import React from "react";
import './Login.css';
function Login(){
    return(
        <div className="login-page">
            <form action="" className="login-form d-flex,flex-column,row-gap-2 justify-content-center">
                <h3>Login</h3>
                <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>
                <button className="btn btn-success w-100">Login</button>

            </form>
        </div>
    )
}
export default Login;