import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, ImageBackground } from 'react-native';

import background from '../assets/images/background.png';
import styles from '../styles/CourseDetailScreen.styles.js';
import global from '../styles/global.styles.js';

export default CourseDetailScreen = (route) => {
    const { image, itemName, itemStatus, itemCategory, itemType, itemSubtitle, } = route.params;

    return (
        <ImageBackground
            source={background}
            style={styles.backgroundContainer}>
            <ScrollView style={global.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image source={image} style={{ width: 260, height: 260, marginRight: 10 }} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{itemName}</Text>
                    <Text style={styles.subTitleText}>200 XP</Text>
                    <Text style={styles.descriptionText}>The Cyber Guardian Badge symbolizes your dedication to upholding the highest standards of IT security within our organization. By completing ALL quarterly IT Security trainings this year, you've equipped yourself with essential knowledge and skills to identify and mitigate cybersecurity threats effectively.</Text>
                    <Text style={styles.benefitsTitle}>Your Benefits</Text>
                    <View style={styles.benefitsContainer}>
                        <Image source={require('../assets/icons/star.png')} style={{ width: 20, height: 20, marginTop: 10, marginRight: 10 }} />
                        <Text style={styles.benefitsText}>free lunch in the canteen</Text>
                    </View>
                    <View style={styles.benefitsContainer}>
                        <Image source={require('../assets/icons/star.png')} style={{ width: 20, height: 20, marginTop: 10, marginRight: 10 }} />
                        <Text style={styles.benefitsText}>50 Euro Amazon gift card</Text>
                    </View>
                </View>
                <CtaButton onPress={() => { console.log("Benefits Claimed") }} />
            </ScrollView>
        </ImageBackground>
    );
}

const CtaButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.ctaContainer}>
            <Image source={require('../assets/images/cta.png')} style={{ width: 350, }} resizeMode='contain' />
        </TouchableOpacity>
    );
};