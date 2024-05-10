import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import background from '../assets/images/background.png';
import colors from '../config/colors.js';

const slides = [
    {
        key: 'one',
        icon: require('../assets/icons/menu_rocket_empty.png'),
        text: 'Browse our course catalogue and sign up for classes!'
    },
    {
        key: 'two',
        icon: require('../assets/icons/menu_trophy_empty.png'),
        text: 'Collect XPs and make it to the top of the leaderboard!'
    },
    {
        key: 'three',
        icon: require('../assets/icons/menu_shield_empty.png'),
        text: 'Unlock Rewards by completing trainings and collecting XPs!'
    },
    {
        key: 'four',
        icon: require('../assets/icons/menu_user_empty.png'),
        text: 'Keep track of your training progress and upcoming classes!'
    }
];

const OnboardingScreen = ({ onDone }) => {
    return (
        <AppIntroSlider
            renderItem={({ item }) => renderItem(item)}
            data={slides}
            onDone={onDone}
            activeDotStyle={styles.activeDotStyle}
            renderNextButton={renderNextButton}
            renderDoneButton={() => renderDoneButton(onDone)}
        />
    );
}

const renderItem = ({ icon, text }) => {
    return (
        <ImageBackground source={background} style={styles.backgroundContainer}>
            <View style={styles.container}>
                <Image source={icon} style={styles.icon} />
                <Text style={styles.text}>{text}</Text>
            </View>
        </ImageBackground>
    );
};

const renderNextButton = () => {
    return (
        <View style={styles.button}>
            <Image
                source={require('../assets/icons/button_round_arrow.png')}
                style={styles.buttonImage}
            />
        </View>
    );
};

const renderDoneButton = (onDone) => {
    return (
        <TouchableOpacity onPress={onDone} style={styles.button}>
            <Image
                source={require('../assets/icons/button_round_checkmark.png')}
                style={styles.buttonImage}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    container: {
        padding: '10%'
    },
    icon: {
        width: 164,
        height: 164,
        textAlign: 'center',
    },
    text: {
        color: 'white',
        fontSize: 32,
        color: colors.titles,
    },
    activeDotStyle: {
        backgroundColor: colors.primary,
        width: 20,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 3,
    },
    buttonImage: {
        height: 64,
        width: 64,
        position: 'relative',
        bottom: 16,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    }
});

export default OnboardingScreen;