import React from 'react';
import { Link } from "react-router-dom";

export const Registration = () => {
    return (
        <div>
            <form>
                <label>Name<input type="text"/></label>
                <label>Email<input type="email"/></label>
                <label>Password<input type="password"/></label>
                <Link><input type="submit"/></Link>
            </form>
            <span>Already have an account? <Link to="/login"><div>Sign in</div></Link></span>
        </div>
    );
};
