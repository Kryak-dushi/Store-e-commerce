import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import { loginUser, getCartById } from '../../api';
import { useNavigate } from "react-router-dom";
import { store } from '../Store';

export const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    function submitHandler() {
        let params = {};
        params.email = emailRef.current.value;
        params.password = passwordRef.current.value;

        loginUser(params)
            .then((r) => {
                if (!!r) {
                    Cookies.set("userid", r._id);
                    navigate("/");
                    getCartById(r._id).finally((res) => store.setCart(res));
                }
                else {
                    emailRef.current.value = '';
                    passwordRef.current.value = '';
                    alert("Wrong login or password")
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className='login_form'>
            <div className='login_input_container'>
                <div className='login_column'>
                    <label className='login_label' htmlFor='login_email'>Email</label>
                    <label className='login_label' htmlFor='login_password'>Password</label>
                </div>
                <div className='login_column'>
                    <input className='login_input' id='login_email' ref={emailRef} type="email" />
                    <input className='login_input' id='login_password' ref={passwordRef} type="password" />
                </div>
            </div>
            <input className='login_submit' onClick={submitHandler} type="submit" value="Log in" />
        </form>
    );
};
