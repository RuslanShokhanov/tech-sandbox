import React, { useState } from 'react';

import { StartScreen } from './start-screen';
import { RolesManager } from './roles-manager';

export const PlayerSelectors = () => {
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const [players, setPlayers] = useState<number>(3);
    const [spies, setSpies] = useState<number>(1);

    const handleStart = () => {
        setIsStarted(true);
    };

    const handleReset = () => {
        setIsStarted(false);
    };

    return (
        <>
            {isStarted ? (
                <RolesManager
                    players={players}
                    spies={spies}
                    onReset={handleReset}
                />
            ) : (
                <StartScreen
                    onStart={handleStart}
                    players={players}
                    spies={spies}
                    setPlayers={setPlayers}
                    setSpies={setSpies}
                />
            )}
        </>
    );
};
