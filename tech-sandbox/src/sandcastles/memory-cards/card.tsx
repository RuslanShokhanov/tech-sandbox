import React from 'react';

import { Styled } from './styled';

interface CardRenderProps {
    name: string;
}

export const Card = (props: CardRenderProps) => {
    return (
        <Styled.CardContainer>
            <Styled.Card>
                <Styled.CardBack/>
                <Styled.CardFront/>
            </Styled.Card>
        </Styled.CardContainer>
    );
};
