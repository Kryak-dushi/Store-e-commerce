import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { store } from '../../Store';

export const Card = ({ item }) => {
    const clickHandler = () => {
        if (store.cart[item._id]) {
            store.cart[item._id].count++;
        } else {
            store.cart = {
                ...store.cart,
                [item._id]: {
                    item,
                    count: 1
                }
            }
        }
    };

    return (
        <div className="card">
            <div className="card_img_container">
                <Link to={`/goods/${item._id}`}>
                    <img className="card_img" src={item.image} alt={item.name} />
                </Link>
            </div>
            <div className="card_info">
                <div className="card_info_row">
                    <span className="card_name">{item.name}</span>
                    <span className="card_price">{item.price + " ₽"}</span>
                </div>
                {
                    item.price_discount && (
                        <div className="card_info_row">
                            <span className="card_price_before_discount">{item.price_discount + " ₽"}</span>
                        </div>
                    )
                }
                <div className="card_info_row">
                    <div className="card_rate_row">
                        <img className="icon" src="./assets/Rate.svg" alt="Rate icon" />
                        <span className="card_rate">{item.rate}</span>
                    </div>
                    {
                        Cookies.get("userid") && <button className="card_action" onClick={clickHandler}>Buy</button>
                    }
                </div>
            </div>
        </div>
    );
};
