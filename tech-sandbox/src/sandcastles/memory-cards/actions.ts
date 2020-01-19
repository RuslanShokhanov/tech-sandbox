import { MemoryCard } from "./interfaces";

export const chunkCards = (cards: MemoryCard[], chunkSize: number) => {
    const arrayLength = cards.length;
    const tempArray = [];

    for (let index = 0; index < arrayLength; index += chunkSize) {
        const cardsChunk = cards.slice(index, index + chunkSize);
        tempArray.push(cardsChunk);
    }

    return tempArray;
};