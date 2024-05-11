import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


import colors from '../config/colors.js';
import background from '../assets/images/background.png';
import styles from '../styles/LeaderBoardScreen.styles.js';
import global from '../styles/global.styles.js';

export default function LoginScreen(props) {
    return (
        <ImageBackground
            source={background}
            style={styles.backgroundContainer}>
            <ScrollView style={global.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign In</Text>
                        <Icon name='keyboard-arrow-right' size={24} color={colors.white} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};