import React from 'react';

import { Card } from './card/Card';

export const Section = ({ title, items }) => {
    return (
        <section className="section">
            <span className="section_name">{title}</span>
            <div className="cards_container">
                {
                    items.map((item, i) => {
                        return <Card item={item} key={i} />;
                    })
                }
            </div>
        </section>
    );
};
