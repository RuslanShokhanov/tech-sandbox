import styled, { css, keyframes } from "styled-components";

const cardColor = {
	back: '#eeeeee',
	backContent: '#558c62'
}

const rotateCard = keyframes`
	from {
	 transform: perspective(1000px) rotateY(0deg);
	}
   
	to {
	 transform: perspective(1000px) rotateY(180deg);
	}
   }`;

const CardFront = styled.div<{ visible: boolean, image:string }>`
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
	background-color: ${cardColor.backContent};
	border-radius: 5px;
	margin: 10px 10px;
	color: ${cardColor.back};
	font-size: 112px;
    text-align: center;
	cursor: pointer;
`;

const Card = styled.div<{ rotate: boolean, image:string }>`
    position: relative;
    height: 100%;
    width: 100%;
    transform-style: preserve-3d;
    transition: all 0.5s ease;
	background-image: url(${props => props.image});
	background-size: 100% 100%;
    border-radius: 5px;
    animation: ${props =>
        props.rotate
            ? css`
                  ${rotateCard} 1.5s
              `
            : "none"};

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;

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

const Board = styled.div``;

const CardRow = styled.div`
    position: relative;
`;

export const Styled = {
    Card,
    CardContainer,
    CardFront,
	CardBack,
	CardBackContent,
    CardRow,
    Board
};
