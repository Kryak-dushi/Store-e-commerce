import React from 'react';
import { observer } from "mobx-react";

import { Section } from './Section';
import { store } from '../Store';


export const Page = observer(() => (
    <div className="content">
        {
            store.getPercussion() && <Section title={'Percussion'} items={store.getPercussion()} />
        }

        {
            store.getWind() && <Section title={'Wind'} items={store.getWind()} />
        }

        {
            store.getStringed() && <Section title={'Stringed'} items={store.getStringed()} />
        }

        {
            store.getKeyboard() && <Section title={'Keyboard'} items={store.getKeyboard()} />
        }

        {
            store.getOther() && <Section title={'Other'} items={store.getOther()} />
        }
    </div>
))
