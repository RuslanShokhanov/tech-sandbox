import React, { useState } from 'react';

import { List } from './list';
import { Sandbox } from './sandbox';
import { getSandCastle, groups } from '../sandcastles/get-sandcastles';

import { Styled } from './styled';
import './index.css';

const localStorageKey = 'tech-sandbox';

export const AppLayout = () => {
    const [sandCastleId, setSandCastleId] = useState(localStorage.getItem(localStorageKey) || 'check-list');
    const sandCastle = getSandCastle(sandCastleId);

    const handleItemClick = (itemId: string) => {
        localStorage.setItem(localStorageKey, itemId);
        setSandCastleId(itemId);
    };

    return (
        <Styled.AppLayout>
            <List groups={groups} onItemClick={handleItemClick} />
            <Sandbox title={sandCastle.title} component={sandCastle.facade} />
        </Styled.AppLayout>
    );
};
