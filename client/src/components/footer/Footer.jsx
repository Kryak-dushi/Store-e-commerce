import React from 'react';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_info">
                <Link to="/" className="title_link"><h1 className="title">MStore</h1></Link>
                <Link to="/cart" className="footer_link"><div>Cart</div></Link>
                <div className="footer_row">
                    <a href="https://vk.com/quack_from_the_heart" target="_blank" rel="noopener noreferrer">
                        <img className="footer_link_icon" src="./assets/VK.svg" alt="VK icon" /></a>
                    <a href="https://t.me/Quack_from_the_heart" target="_blank" rel="noopener noreferrer">
                        <img className="footer_link_icon" src="./assets/Telegram.svg" alt="Telegram icon" /></a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" rel="noopener noreferrer">
                        <img className="footer_link_icon" src="./assets/Whatsapp.svg" alt="Whatsapp icon" /></a>
                </div>

            </div>
        </footer>
    );
};
