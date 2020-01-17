import React, { useState, useEffect } from "react";

import { MemoryCard } from "./interfaces";
import { Card } from "./card";

import { Styled } from "./styled";

interface GameBoardProps {
    cards: MemoryCard[];
    errorsCount: number;
}

interface CardRowProps {
    cards: MemoryCard[];
    canRotate: boolean;
    onClick: (
        cardId: string,
        pairId: string,
        isOpen: boolean,
        setRotate: (value: boolean) => void
    ) => void;
}

const CardRow = (props: CardRowProps) => {
    return (
        <Styled.CardRow>
            {props.cards.map(card => (
                <Card
                    id={card.id}
                    image={card.image}
                    canRotate={props.canRotate}
                    pairId={card.pairId}
                    onClick={props.onClick}
                />
            ))}
        </Styled.CardRow>
    );
};

interface UserChoiceConfig {
    cardId: string;
    pairId: string;
    isOpen: boolean;
    setRotate: (value: boolean) => void;
}

export const GameBoard = (props: GameBoardProps) => {
    const [userChoice, setUserChoice] = useState<UserChoiceConfig[]>([]);

    const handleClick = (
        cardId: string,
        pairId: string,
        isOpen: boolean,
        setRotate: (value: boolean) => void
    ) => {
        if (userChoice.length < 2) {
            setUserChoice([
                ...userChoice,
                { cardId, pairId, isOpen, setRotate }
            ]);
        }
    };

    const rotateUnmatchedCards = () => {
        debugger;
        if (userChoice.length === 2) {
            userChoice.map(uc => uc.setRotate(true));
        }
    };

    const a = userChoice.length;

    useEffect(() => {
        rotateUnmatchedCards();
    }, [a]);

    return (
        <Styled.Board>
            <CardRow
                cards={props.cards.slice(0, 5)}
                canRotate={userChoice.length < 2}
                onClick={handleClick}
            />
            <CardRow
                cards={props.cards.slice(5, 10)}
                canRotate={userChoice.length < 2}
                onClick={handleClick}
            />
            <CardRow
                cards={props.cards.slice(10, 15)}
                canRotate={userChoice.length < 2}
                onClick={handleClick}
            />
            <CardRow
                cards={props.cards.slice(15, 20)}
                canRotate={userChoice.length < 2}
                onClick={handleClick}
            />
        </Styled.Board>
    );
};
