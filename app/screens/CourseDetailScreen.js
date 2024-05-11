import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, ImageBackground } from 'react-native';

import background from '../assets/images/background.png';
import styles from '../styles/CourseDetailScreen.styles.js';

export default CourseDetailScreen = (route) => {
    const { imageUrl, itemName, itemStatus, itemCategory, itemType, itemSubtitle, } = route.params;

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