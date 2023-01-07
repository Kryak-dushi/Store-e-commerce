import React from 'react';
import { observer } from "mobx-react";

import { Section } from './Section';
import { store } from '../Store';


export const Page = observer(() => (
    <div className="content">
        {
            store.isEmpty() && <span className="section_name">Store is empty. Try again later.</span>
        }

        {
            (store.getPercussion().length !== 0) && <Section title={'Percussion'} items={store.getPercussion()} />
        }

        {
            (store.getWind().length !== 0) && <Section title={'Wind'} items={store.getWind()} />
        }

        {
            (store.getStringed().length !== 0) && <Section title={'Stringed'} items={store.getStringed()} />
        }

        {
            (store.getKeyboard().length !== 0) && <Section title={'Keyboard'} items={store.getKeyboard()} />
        }

        {
            (store.getOther().length !== 0) && <Section title={'Other'} items={store.getOther()} />
        }
    </div>
))
