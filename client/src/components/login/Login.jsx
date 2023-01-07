import React from 'react';

export const Login = () => {
    return (
        <form className='login_form'>
            <div className='login_input_container'>
                <div className='login_column'>
                    <label className='login_label' htmlFor='login_email'>Email</label>
                    <label className='login_label' htmlFor='login_password'>Password</label>
                </div>
                <div className='login_column'>
                    <input className='login_input' id='login_email' type="email" />
                    <input className='login_input' id='login_password' type="password" />
                </div>
            </div>
            <input className='login_submit' type="submit" value="Log in" />
        </form>
    );
};
