import React from 'react';
import { observer } from "mobx-react";

import { Section } from './Section';
import { store } from '../Store';


export const Page = observer(() => (
    <div className="content">
        <Section title={'Перкуссионные'} items={store.getPercussion()} />
        <Section title={'Духовые'} items={store.getWind()} />
    </div>
))
