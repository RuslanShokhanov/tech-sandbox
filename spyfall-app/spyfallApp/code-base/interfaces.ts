import { GestureResponderEvent } from "react-native";

export interface Location {
    name: string;
    image: NodeRequire;
}

export interface MissionLocation {
    [locationName: string]: Location;
}

export interface ButtonProps {
    icon: string;
    onPress: (event: GestureResponderEvent) => void;
}

export interface IncrementDecrementProps {
    increment: (event: GestureResponderEvent) => void;
    decrement: (event: GestureResponderEvent) => void;
}

export interface StartScreenProps {
    setPlayers: (value: React.SetStateAction<number>) => void;
    setSpies: (value: React.SetStateAction<number>) => void
    onStart: () => void;
    players: number;
    spies: number;
}

export interface RolesManagerProps {
    players: number;
    spies: number;
    onReset: () => void;
}

export interface MissionRadarProps {
    onRoleAssigned: () => void;
    onReset: () => void;
}

export interface LocationScreenProps {
    location: Location;
    onPress: () => void;
}

export interface AgentScreenProps {
    onPress: () => void;
}