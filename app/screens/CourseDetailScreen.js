import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, ImageBackground } from 'react-native';

import background from '../assets/images/background.png';
import styles from '../styles/CourseDetailScreen.styles.js';

export default CourseDetailScreen = (route) => {
    return (
        <ImageBackground
            source={background}
            style={styles.backgroundContainer}>
            <View>
                <Text>CourseDetailScreen</Text>
            </View>
        </ImageBackground>
    );
};