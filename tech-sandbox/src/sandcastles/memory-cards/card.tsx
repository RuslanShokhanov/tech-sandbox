import React, { useState } from "react";

import { Styled } from "./styled";

interface CardRenderProps {
    id: string;
    pairId: string;
    image: string;
    canRotate: boolean;
    onClick: (
        cardId: string,
        pairId: string,
        isOpen: boolean,
        setRotate: (value: boolean) => void
    ) => void;
}

export const Card = (props: CardRenderProps) => {
    const [rotate, setRotate] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleAnimationEnd = () => {
        setIsOpen(!isOpen);
        setRotate(false);
    };

    const handleClick = () => {
        if (props.canRotate) {
            props.onClick(props.id, props.pairId, isOpen, setRotate);
            setRotate(true);
        }
    };

    return (
        <Styled.CardContainer>
            <Styled.Card
                rotate={rotate}
                onClick={handleClick}
                onAnimationEnd={handleAnimationEnd}
                image={props.image}
            >
                <Styled.CardBack visible={!isOpen}>
                    <Styled.CardBackContent>?</Styled.CardBackContent>
                </Styled.CardBack>
                <Styled.CardFront visible={isOpen} image={props.image} />
            </Styled.Card>
        </Styled.CardContainer>
    );
};
