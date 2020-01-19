import React, { useState, useEffect } from 'react';

import { CardConfig } from './interfaces';

import { Styled } from './styled';

interface CardRenderProps {
    id: string;
    pairId: string;
    image: string;
    canRotate: boolean;
    onClick: (cardId: string) => void;
    onFlip: () => void;
    registerCard: (card: CardConfig) => void;
}

export const Card = (props: CardRenderProps) => {
    const [rotate, setRotate] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [hasPair, setHasPair] = useState<boolean>(false);

    const flip = () => {
        setRotate(true);
    };

    const handleAnimationEnd = () => {
        setIsOpen(!isOpen);
        setRotate(false);
        props.onFlip();
    };

    const handleClick = () => {
        if (!props.canRotate || hasPair) {
            return;
        }
        props.onClick(props.id);
        setRotate(true);
    };

    useEffect(
        () =>
            props.registerCard({
                cardId: props.id,
                pairId: props.pairId,
                flip,
                setHasPair
            }),
        [props]
    );

    return (
        <Styled.CardContainer>
            <Styled.Card
                isRotating={rotate}
                onClick={handleClick}
                onAnimationEnd={handleAnimationEnd}
                image={props.image}
                hasPair={hasPair}
            >
                <Styled.CardBack visible={!isOpen}>
                    <Styled.CardBackContent>0</Styled.CardBackContent>
                </Styled.CardBack>
                <Styled.CardFront visible={isOpen} image={props.image} />
            </Styled.Card>
        </Styled.CardContainer>
    );
};
