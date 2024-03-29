import React from 'react';

import { Cart } from './cart/Cart';
import { CartSummary } from './CartSummary';
import { observer } from "mobx-react";
import { store } from '../Store';


export const CartPage = observer(() => (
    <div className="cart">
        <div className="cart_title">Cart</div>
        <div className="cart_content">
            <Cart items={store.getCart()}/>
            <CartSummary amount={store.getTotalPrice()} />
        </div>
    </div>
))
