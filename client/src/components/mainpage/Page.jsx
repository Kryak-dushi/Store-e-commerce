import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { getGoods } from '../../api'

import { store } from '../Store';
import { Section } from './Section';


export const Page = observer(() => {
    useEffect(() => {
        getGoods().then((r) => store.setGoods(r))
    }, [])


    return <div className="content">
        <Section title={'Keyboard'} items={store.getKeyboard()} />
        <Section title={'Percussion'} items={store.getPercussion()} />
        <Section title={'Stringed'} items={store.getStringed()} />
        <Section title={'Wind'} items={store.getWind()} />
        <Section title={'Other'} items={store.getOther()} />
    </div>
})
