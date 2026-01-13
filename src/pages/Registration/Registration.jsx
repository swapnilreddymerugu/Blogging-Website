import React from "react";
import './Registration.css';
function Registration(){
    return(
        <div className="register-page">
            <form action="" className="register-form d-flex flex-column row-gap-3  justify-content-center">
                <h3>Register</h3>
                <div className="form-floating ">
                <input type="text" className="form-control" id="floatingInput" placeholder="Name"/>
                <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating">
                    <input type="tel" className="form-control" id="phone" placeholder="number" inputMode="numeric" pattern="[0-9]*"/>
                    <label htmlFor="phone">phone number</label>
                </div>
                
                <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="btn btn-success w-100">Register</button>

            </form>
        </div>
    )
}
export default Registration;