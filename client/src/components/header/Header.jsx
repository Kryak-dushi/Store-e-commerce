import React from 'react';
import { store } from '../Store';
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

export const Header = observer(() => (
    <header className="header">
        <Link to="/" className="title_link"><h1 className="title">MStore</h1></Link>

        <div className="icons_container">
            <div className="icon_wrapper">
                <Link to="/cart"><img className="icon" alt="Cart" src="./assets/Cart.svg" /></Link>
                {
                    store.getCounter() > 0 && (
                        <div className="counter">{store.getCounter() < 100 ? store.getCounter() : "99"}</div>
                    )
                }
            </div>
            <div className="icon_wrapper">
                <Link to="/registration"><img className="icon" alt="Login icon" src="./assets/login.svg" /></Link>
            </div>
        </div>
    </header>
))
