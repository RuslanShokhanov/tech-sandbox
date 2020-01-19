export interface MemoryCard {
    pairId: string;
	id: string;
	image: string;
}

export interface UserChoiceConfig {
    [cardId: string]: CardChoiceConfig;
}

export interface CardChoiceConfig {
    pairId: string;
    flip: () => void;
    setHasPair: (value: boolean) => void;
}

export interface CardConfig extends CardChoiceConfig {
    cardId: string;
}

export interface GameBoardProps {
    cards: MemoryCard[];
    errorsCount: number;
}

export interface UserAction {
	shots: number;
	correct: number;
}