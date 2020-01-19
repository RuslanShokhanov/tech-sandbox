import React from 'react';

import { MemoryCard, CardConfig } from './interfaces';
import { Card } from './card';

import { Styled } from './styled';

interface CardRowProps {
    cards: MemoryCard[];
    canRotate: boolean;
    onClick: (cardId: string) => void;
    onFlip: () => void;
    registerCard: (card: CardConfig) => void;
}

export const CardRow = (props: CardRowProps) => {
    return (
        <Styled.CardRow>
            {props.cards.map(card => (
                <Card
                    key={card.id}
                    id={card.id}
                    image={card.image}
                    canRotate={props.canRotate}
                    pairId={card.pairId}
                    onClick={props.onClick}
                    onFlip={props.onFlip}
                    registerCard={props.registerCard}
                />
            ))}
        </Styled.CardRow>
    );
};
