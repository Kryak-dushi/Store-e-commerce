import React from 'react';
import { CartCard } from '../cartcard/CartCard';

export const Cart = ({ items }) => {
    return (
        <div className="cart_cards_container">
            {
                (items.length === 0)
                    ? <div className="cart_empty">Cart is empty</div>
                    : items.map((item, i) => {
                        return <CartCard item={item} key={i} />;
                    })
            }
        </div>
    );
};
