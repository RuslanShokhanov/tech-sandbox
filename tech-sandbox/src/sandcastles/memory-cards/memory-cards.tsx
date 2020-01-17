import React from "react";

import { buildSandCastle } from "../build-sandcastle";
import { groupIds } from "../get-sandcastles";
import { GameBoard } from "./game-board";
import { MemoryCard } from "./interfaces";

import Background1 from "./images/img1.png";
import Background2 from "./images/img2.png";
import Background3 from "./images/img3.png";
import Background4 from "./images/img4.png";
import Background5 from "./images/img5.png";
import Background6 from "./images/img6.png";
import Background7 from "./images/img7.png";
import Background8 from "./images/img8.png";
import Background9 from "./images/img9.png";
import Background10 from "./images/img10.png";

const sandCastleId = "memory-cards";

const cards: MemoryCard[] = [
    { pairId: "pair-1", id: "card-1", image: Background1 },
    { pairId: "pair-1", id: "card-2", image: Background1 },
    { pairId: "pair-2", id: "card-3", image: Background2 },
    { pairId: "pair-2", id: "card-4", image: Background2 },
    { pairId: "pair-3", id: "card-5", image: Background3 },
    { pairId: "pair-3", id: "card-6", image: Background3 },
    { pairId: "pair-4", id: "card-7", image: Background4 },
    { pairId: "pair-4", id: "card-8", image: Background4 },
    { pairId: "pair-5", id: "card-9", image: Background5 },
    { pairId: "pair-5", id: "card-10", image: Background5 },
    { pairId: "pair-6", id: "card-11", image: Background6 },
    { pairId: "pair-6", id: "card-12", image: Background6 },
    { pairId: "pair-7", id: "card-13", image: Background7 },
    { pairId: "pair-7", id: "card-14", image: Background7 },
    { pairId: "pair-8", id: "card-15", image: Background8 },
    { pairId: "pair-8", id: "card-16", image: Background8 },
    { pairId: "pair-9", id: "card-17", image: Background9 },
    { pairId: "pair-9", id: "card-18", image: Background9 },
    { pairId: "pair-10", id: "card-19", image: Background10 },
    { pairId: "pair-10", id: "card-20", image: Background10 }
];

const getCards = () => {
    const shuffledArray = cards;
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i]
        ];
    }

    return shuffledArray;
};

const MemoryCards = () => {
    return <GameBoard cards={getCards()} errorsCount={5} />;
};

export const memoryCardsSandcastle = () =>
    buildSandCastle(
        { id: sandCastleId, component: MemoryCards },
        { groupId: groupIds.gameGroup, itemTitle: "Memory Cards" }
    );
