import React, { useRef, useState } from 'react';

import {
    CardConfig,
    UserChoiceConfig,
    GameBoardProps,
    UserAction
} from './interfaces';
import { chunkCards } from './actions';
import { CardRow } from './card-row';

import { Styled } from './styled';

const ROTATE_DELAY = 500;

const CompleteGame = () => {
    return (
        <>
            <Styled.ResetButton onClick={() => document.location.reload()}>
                Reset
            </Styled.ResetButton>
            <Styled.Ending>Excellent</Styled.Ending>
        </>
    );
};

export const GameBoard = (props: GameBoardProps) => {
    const userChoice = useRef<UserChoiceConfig>({});
    const [chosenCards, setChosenCards] = useState<CardConfig[]>([]);
    const [canRotate, setCanRotate] = useState<boolean>(true);
    const [userActions, setUserActions] = useState<UserAction>({
        shots: 0,
        correct: 0
    });

    const handleClick = (cardId: string) => {
        setCanRotate(false);
        const card = userChoice.current[cardId];

        const concat = chosenCards.concat({
            cardId,
            pairId: card.pairId,
            flip: card.flip,
            setHasPair: card.setHasPair
        });
        setChosenCards(concat);
    };

    const rotateCards = () => {
        chosenCards.forEach(cc => {
            cc.flip();
        });
        setUserActions({
            shots: userActions.shots + 1,
            correct: userActions.correct
        });
        setChosenCards([]);
    };

    const markAsMatch = () => {
        chosenCards.forEach(cc => {
            cc.setHasPair(true);
        });
        setUserActions({
            shots: userActions.shots + 1,
            correct: userActions.correct + 1
        });
        setCanRotate(true);
    };

    const handleFlip = () => {
        if (chosenCards.length < 2) {
            setCanRotate(true);
        }

        if (chosenCards.length === 2) {
            if (chosenCards[0].pairId !== chosenCards[1].pairId) {
                setTimeout(rotateCards, ROTATE_DELAY);
            } else {
                markAsMatch();
            }
            setChosenCards([]);
        }
    };

    const registerCardOnBoard = (card: CardConfig) => {
        userChoice.current = {
            ...userChoice.current,
            [card.cardId]: card
        };
    };

    const isCompleted = userActions.correct === props.cards.length / 2;

    return (
        <Styled.Board>
            <Styled.ErrorsCounter>
                {`Shots: ${userActions.shots}`}
            </Styled.ErrorsCounter>
            {chunkCards(props.cards, 6).map((chunk, index) => (
                <CardRow
                    key={index}
                    cards={chunk}
                    canRotate={canRotate}
                    onClick={handleClick}
                    onFlip={handleFlip}
                    registerCard={registerCardOnBoard}
                />
            ))}
            {isCompleted && <CompleteGame />}
        </Styled.Board>
    );
};
