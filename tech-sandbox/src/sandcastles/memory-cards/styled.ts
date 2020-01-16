import styled from 'styled-components';

const CardFront = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: lightblue;
    backface-visibility: hidden;
    border-radius: 20px;
`;

const CardBack = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: green;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    border-radius: 15px;
`;

const Card = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    transform-style: preserve-3d;
    transition: all 0.5s ease;
    :hover {
        transform: rotateY(180deg);
    }
`;

const CardContainer = styled.div`
    display: inline-block;
    position: relative;
    height: 150px;
    width: 200px;
    margin: 15px;
`;

const Board = styled.div``;

const CardRow = styled.div`
    position: relative;
`; 

export const Styled = {
    Card,
    CardContainer,
    CardFront,
    CardBack,
    CardRow,
    Board
};
