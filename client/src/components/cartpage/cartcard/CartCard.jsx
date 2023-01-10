import React from 'react';

import { store } from '../../Store';

export const CartCard = ({ item }) => {
    const addClickHandler = () => {
        store.cart[item._id].count++;
    }

    const subClickHandler = () => {
        store.cart[item._id].count--;
    }

    const delClickHandler = () => {
        delete store.cart[item._id];
    }

    return (
        <div className="cart_card">
            <div className="cart_card_row">
                <div className="cart_card_info">
                    <img src={item.image} alt={item.name} className="cart_card_img" />
                    <div className="cart_card_text_info">
                        <div className="cart_card_title">{item.name}</div>
                        <div className="cart_card_price">{item.price + " ₽"}</div>
                    </div>
                </div>
                <img src="./assets/Delete.svg" alt="Delete icon" className="icon" onClick={delClickHandler} />
            </div>
            <div className="cart_card_row">
                <div className="cart_card_counter_container">
                    {
                        store.getCountBySKU(item._id) > 1
                            ? <button className="cart_card_button" onClick={subClickHandler}>−</button>
                            : <button disabled className="cart_card_button" onClick={subClickHandler}>−</button>
                    }
                    <div className="cart_card_counter">{store.getCountBySKU(item._id)}</div>
                    <button className="cart_card_button" onClick={addClickHandler}>+</button>
                </div>
                <div className="cart_card_amount">{store.getTotalPriceBySKU(item._id) + " ₽"}</div>
            </div>
        </div>
    );
};
