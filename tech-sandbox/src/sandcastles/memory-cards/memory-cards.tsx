import React from 'react';

import { buildSandCastle } from '../build-sandcastle';
import { groupIds } from '../get-sandcastles';
import { GameBoard } from './game-board';
import { MemoryCard } from './interfaces';

const sandCastleId = 'memory-cards';

const cards: MemoryCard[] = [
    { pairId: 'pair-1', name: '1' },
    { pairId: 'pair-1', name: '2' },
    { pairId: 'pair-2', name: '3' },
    { pairId: 'pair-2', name: '4' },
    { pairId: 'pair-3', name: '5' },
    { pairId: 'pair-3', name: '6' },
    { pairId: 'pair-4', name: '7' },
    { pairId: 'pair-4', name: '8' },
    { pairId: 'pair-5', name: '9' },
    { pairId: 'pair-5', name: '10' },
    { pairId: 'pair-6', name: '11' },
    { pairId: 'pair-6', name: '12' },
    { pairId: 'pair-7', name: '13' },
    { pairId: 'pair-7', name: '14' },
    { pairId: 'pair-8', name: '15' },
    { pairId: 'pair-8', name: '16' },
    { pairId: 'pair-9', name: '17' },
    { pairId: 'pair-9', name: '18' },
    { pairId: 'pair-10', name: '19' },
    { pairId: 'pair-10', name: '20' }
];

const MemoryCards = () => {
    return <GameBoard cards={cards} errorsCount={5} />;
};

export const memoryCardsSandcastle = () =>
    buildSandCastle(
        { id: sandCastleId, component: MemoryCards },
        { groupId: groupIds.gameGroup, itemTitle: 'Memory Cards' }
    );
