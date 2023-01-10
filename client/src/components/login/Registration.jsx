import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { createUser } from '../../api';

export const Registration = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    function submitHandler() {
        let user = {};
        user.name = nameRef.current.value;
        user.email = emailRef.current.value;
        user.password = passwordRef.current.value;

        createUser(user).catch(err => console.log(err));
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className='registration_form'>
            <div className='registration_input_container'>
                <div className='login_column'>
                    <label className='login_label' htmlFor='login_name'>Name</label>
                    <label className='login_label' htmlFor='login_email'>Email</label>
                    <label className='login_label' htmlFor='login_password'>Password</label>
                </div>
                <div className='login_column'>
                    <input className='login_input' ref={nameRef} id='login_name' type="text" />
                    <input className='login_input' ref={emailRef} id='login_email' type="email" />
                    <input className='login_input' ref={passwordRef} id='login_password' type="password" />
                </div>
            </div>
            <input className='login_submit' type="submit" onClick={submitHandler} value="Log in" />
            <div className='have_account'>Already have an account? <Link to="/login">Sign in</Link></div>
        </form>
    );
};

