import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from "react-router-dom";
import { getGoodById } from '../../../api'
import { store } from '../../Store';

export const Cardinfo = observer(() => {
    const [item, setGood] = useState(0);
    const id = useParams().id;

    useEffect(() => {
        getGoodById(id).then((r) => setGood(r));
    }, [id]);

    const clickHandler = () => {
        if (store.cart[item.sku]) {
            store.cart[item.sku].count++;
        } else {
            store.cart = {
                ...store.cart,
                [item.sku]: {
                    item,
                    count: 1
                }
            }
        }
    };

    return <div className="infocard">
        <div className="infocard_image_container">
            <img className="infocard_img" src={"." + item.image} alt={item.name} />
        </div>
        <div className="info">
            <div className="main_info">
                <span className="infocard_name">{item.name}</span>
                <span className="infocard_code">Vendor code: {item.vendor_code}</span>
                <div className="infocard_row">
                    <span className="infocard_price">{item.price + " ₽"}</span>
                    {
                        item.price_discount && (
                            <span className="infocard_price_before_discount">{item.price_discount + " ₽"}</span>
                        )
                    }
                </div>
                <div className="card_rate_row">
                    <img className="icon" src="../assets/Rate.svg" alt="Rate icon" />
                    <span className="card_rate">{item.rate}</span>
                </div>
            </div>
            <button className="infocard_action" onClick={clickHandler}>Buy</button>
        </div>
    </div>
});