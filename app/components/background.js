import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const BackgroundComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.baseBlack} />
            <View style={styles.blueOverlay} />
            <View style={styles.blurredGroup}>
                <View style={styles.innerGroup} />
            </View>
            <View style={styles.yellowBlockTop} />
            <View style={styles.yellowBlockMiddle} />
            <View style={styles.greenBlock} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    baseBlack: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
    },
    blueOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 105, 146, 0.43)',
    },
    blurredGroup: {
        position: 'absolute',
        left: '22.25%',
        right: '5.44%',
        top: '17.5%',
        bottom: '19.25%',
        backgroundColor: '#27476E',
        opacity: 0.8,
    },
    innerGroup: {
        flex: 1,
        backgroundColor: '#27476E',
        borderRadius: 10,
    },
    yellowBlockTop: {
        position: 'absolute',
        left: '36.19%',
        right: '7%',
        top: '17.5%',
        bottom: '7.06%',
        backgroundColor: '#FFC700',
    },
    yellowBlockMiddle: {
        position: 'absolute',
        left: '31.19%',
        right: '5.44%',
        top: '45.63%',
        bottom: '19.25%',
        backgroundColor: '#FFC700',
    },
    greenBlock: {
        position: 'absolute',
        left: '22.25%',
        right: '10%',
        top: '45.44%',
        bottom: '3.63%',
        backgroundColor: '#EAF8BF',
    },
});

export default BackgroundComponent;
