import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';

import { MissionRadarProps } from './interfaces';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: win.width,
        height: win.height
    },
    buttonWrap: {
        justifyContent: 'center'
    },
    button: {
        display: 'flex',
        bottom: 8,
        width: 150,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ff3853',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonText: {
        marginTop: 8,
        fontSize: 20,
        color: '#fff'
    },
    reset: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        height: 30,
        borderRadius: 8,
        color: '#fff'
    },
    resetText: {
        fontSize: 18,
        color: '#fff'
    }
});

export const MissionRadar = (props: MissionRadarProps) => {
    return (
        <ImageBackground
            style={styles.image}
            source={require('./images/radar.jpg')}
        >
            <View style={styles.buttonWrap}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={props.onRoleAssigned}
                >
                    <Text style={styles.buttonText}>Задание</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.reset} onPress={props.onReset}>
                <Text style={styles.resetText}>{`< Reset >`}</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};
