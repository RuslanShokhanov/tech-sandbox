import React, { useState } from 'react';

import { Location } from './interfaces';
import { RolesManagerProps } from './interfaces';
import { generateLocation } from './locations';
import { MissionRadar } from './mission-radar';
import { LocationScreen } from './location-screen';
import { AgentScreen } from './agent-screen';

const shuffleRoles = (playersCount: number, spiesCount: number) => {
    const roles = Array(playersCount - spiesCount).fill(0);
    roles.push(...Array(spiesCount).fill(1));
    roles.sort(() => Math.random() - 0.5);
    return roles;
};

export const RolesManager = (props: RolesManagerProps) => {
    const [isRoleAssigned, setIsRoleAssigned] = useState<boolean>(false);
    const [step, setStep] = useState<number>(0);
    const [location] = useState<Location>(generateLocation());
    const [roles] = useState<number[]>(
        shuffleRoles(props.players, props.spies)
    );

    const handleRoleAssigned = () => {
        setIsRoleAssigned(true);
    };

    const handleRoleIsUnknown = () => {
        setStep(step + 1);
        setIsRoleAssigned(false);
    };

    const onPressHandler =
        step === props.players - 1 ? props.onReset : handleRoleIsUnknown;
    const isAgent = roles[step] === 1;
    const RoleScreen = isAgent ? (
        <AgentScreen onPress={onPressHandler} />
    ) : (
        <LocationScreen location={location} onPress={onPressHandler} />
    );

    return (
        <>
            {isRoleAssigned ? (
                RoleScreen
            ) : (
                <MissionRadar
                    onRoleAssigned={handleRoleAssigned}
                    onReset={props.onReset}
                />
            )}
        </>
    );
};
