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
        <Section title={'Goods'} items={store.getGoods()} />
    </div>
})
