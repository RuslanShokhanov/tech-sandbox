import React, { useState } from 'react';

import { MemoryCard } from './interfaces';
import { Card } from './card';

import { Styled } from './styled';

interface GameBoardProps {
    cards: MemoryCard[];
    errorsCount: number;
}

interface CardRowProps {
    cards: MemoryCard[];
}

const CardRow = (props: CardRowProps) => {
    return (
        <Styled.CardRow>
            {props.cards.map(card => (
                <Card name={card.name} />
            ))}
        </Styled.CardRow>
    );
};

export const GameBoard = (props: GameBoardProps) => {
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [userErrors, setUserErrors] = useState<number>(0);

    return (
        <Styled.Board>
            <CardRow cards={props.cards.slice(0, 5)} />
            <CardRow cards={props.cards.slice(5, 10)} />
            <CardRow cards={props.cards.slice(10, 15)} />
            <CardRow cards={props.cards.slice(15, 20)} />
        </Styled.Board>
    );
};
