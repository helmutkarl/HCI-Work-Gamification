import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: 'one',
        icon: require('../assets/icons/menu_rocket_full.png'),
        text: 'Browse our course catalogue and sign up for classes!'
    },
    {
        key: 'two',
        icon: require('../assets/icons/menu_rocket_full.png'),
        text: 'Collect XP and make it to the top of the leaderboard!'
    },
    {
        key: 'three',
        icon: require('../assets/icons/menu_rocket_full.png'),
        text: 'Unlock Rewards by completing trainings and collecting XP!'
    },
    {
        key: 'four',
        icon: require('../assets/icons/menu_rocket_full.png'),
        text: 'Keep track of your training progress and upcoming classes!'
    }
];

const OnboardingScreen = ({ onDone }) => {
    return (
        <AppIntroSlider
            renderItem={({ item }) => renderItem(item)}
            data={slides}
            onDone={onDone}
        />
    );
}

const renderItem = ({ icon, text }) => {
    return (
        <View>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    icon: {
        width: 150,
        height: 150,
        textAlign: 'center',
    },
    text: {
        color: 'white',
        textAlign: 'center',
    }
});

export default OnboardingScreen;
