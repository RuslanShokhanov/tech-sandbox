import React, { PropsWithChildren, useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import {
    IncrementDecrementProps,
    ButtonProps,
    StartScreenProps
} from './interfaces';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4dc6fa',
        width: 40,
        height: 25,
        borderRadius: 10,
        color: '#fff',
        alignItems: 'center'
    },
    buttonText: {
        marginTop: 1,
        color: '#fff'
    },
    controls: {
        display: 'flex',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    controlText: {
        paddingLeft: 20,
        paddingRight: 20
    },
    gameLabelText: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20
    },
    gameLabelFirstText: {
        fontSize: 20
    },
    gameLabelSecondText: {
        fontSize: 20,
        fontStyle: 'italic',
        color: '#ff3853'
    },
    gameLabelThirdText: {
        fontSize: 20,
        fontStyle: 'italic'
    },
    controlsArea: {
        paddingTop: 60
    },
    startButtonWrap: {
        paddingTop: 50,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    startButton: {
        display: 'flex',
        width: 150,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ff3853',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 40,
        shadowColor: 'grey'
    },
    startButtonText: {
        marginTop: 8,
        fontSize: 20,
        color: '#fff'
    }
});

const IncrementDecrementControls = (
    props: PropsWithChildren<IncrementDecrementProps>
) => {
    return (
        <View style={styles.controls}>
            <Button onPress={props.increment} icon="+" />
            <Text style={styles.controlText}>{props.children}</Text>
            <Button onPress={props.decrement} icon="-" />
        </View>
    );
};

const Button = (props: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.icon}</Text>
        </TouchableOpacity>
    );
};

export const StartScreen = (props: StartScreenProps) => {
    const { onStart, setPlayers, setSpies, players, spies } = props;

    const handleAddPlayer = () => {
        setPlayers(players + 1);
    };

    const handleAddSpy = () => {
        if (spies === players - 2) {
            return;
        }
        setSpies(spies + 1);
    };

    const handleRemovePlayer = () => {
        if (players === 3) {
            return;
        }

        setPlayers(players - 1);
    };

    const handleRemoveSpy = () => {
        if (spies === 1) {
            return;
        }

        setSpies(spies - 1);
    };

    return (
        <>
            <View style={styles.gameLabelText}>
                <Text style={styles.gameLabelFirstText}>Найди </Text>
                <Text style={styles.gameLabelSecondText}>шпиона</Text>
                <Text style={styles.gameLabelThirdText}>!</Text>
            </View>
            <View style={styles.controlsArea}>
                <IncrementDecrementControls
                    increment={handleAddPlayer}
                    decrement={handleRemovePlayer}
                >
                    Игроки: {players}
                </IncrementDecrementControls>
                <IncrementDecrementControls
                    increment={handleAddSpy}
                    decrement={handleRemoveSpy}
                >
                    Шпионы: {spies}
                </IncrementDecrementControls>
            </View>
            <View style={styles.startButtonWrap}>
                <TouchableOpacity style={styles.startButton} onPress={onStart}>
                    <Text style={styles.startButtonText}>Играть</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};
