import React from 'react';

import { ItemList } from './item-list';
import { Sandbox } from './sandox';

export const AppLayout = () => {
    return (<div className='app-layout-root'>
        <ItemList/>
        <Sandbox/>
    </div>);
}