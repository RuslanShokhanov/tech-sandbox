import styled, { css, keyframes } from "styled-components";

import CardBackImage from "./images/card-back.png";

const cardColor = {
    back: "#eeeeee",
    backContent: "#558c62"
};

const rotateCard = keyframes`
	from {
	 transform: perspective(1000px) rotateY(0deg);
	}
   
	to {
	 transform: perspective(1000px) rotateY(180deg);
	}
   }`;

const CardFront = styled.div<{ visible: boolean; image: string }>`
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url(${props => props.image});
    transform: scaleX(-1);
    background-size: 100% 100%;
    backface-visibility: hidden;
    border-radius: 5px;
    z-index: ${props => (props.visible ? "1" : "-1")};
`;

const CardBack = styled.div<{ visible: boolean }>`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${cardColor.back};
    border-radius: 5px;
    z-index: ${props => (props.visible ? "1" : "-1")};
`;

const CardBackContent = styled.div`
    height: 130px;
    width: 180px;
	background-image: url(${CardBackImage});
	transform-style: preserve-3d;
	background-size: 100% 100%;
    border-radius: 5px;
    margin: 10px 10px;
    color: ${cardColor.back};
    font-size: 112px;
    text-align: center;
    cursor: pointer;
`;

const Card = styled.div<{
    isRotating: boolean;
    image: string;
    hasPair: boolean;
}>`
    position: relative;
    height: 100%;
    width: 100%;
    transform-style: preserve-3d;
    background-image: url(${props => props.image});
    background-size: 100% 100%;
    border-radius: 5px;
    animation: ${props =>
        props.isRotating
            ? css`
                  ${rotateCard} 0.4s
              `
            : "none"};

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: all 1s ease;
    opacity: ${props => (props.hasPair ? "0.15" : "1")};

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
`;

const CardContainer = styled.div`
    display: inline-block;
    position: relative;
    height: 150px;
    width: 200px;
    margin: 10px;
`;

const ResetButton = styled.button`
    background-color: #558c62;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 10px;
    font-family: fantasy;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
`;

const ErrorsCounter = styled.div`
    padding: 10px;
    font-family: fantasy;
    font-size: 25px;
    color: ${cardColor.backContent};
`;

const Board = styled.div`
    padding-left: 40px;
`;

const CardRow = styled.div`
    position: relative;
`;

const Ending = styled.div`
    color: ${cardColor.backContent};
    font-family: fantasy;
    font-size: 25px;
    text-transform: uppercase;
    position: absolute;
    right: 600px;
    top: 370px;
    transform: rotate(-15deg);
    font-size: 110px;
    border: 10px solid;
    border-radius: 20px;
    padding: 20px;
    transition: all 2s ease;
`;

export const Styled = {
    Card,
    CardContainer,
    CardFront,
    CardBack,
    CardBackContent,
    CardRow,
    Board,
    Ending,
    ErrorsCounter,
    ResetButton
};
