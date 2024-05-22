import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';

import background from '../assets/images/background.png';
import styles from '../styles/CourseDetailScreen.styles.js';
import global from '../styles/global.styles.js';
import coursesData from '../data/courses.json';
import colors from '../config/colors';

export default CourseDetailScreen = ({ route }) => {
    const { image, title, type, category, subtitle, description, status } = route.params;

    return (
        <ImageBackground
            source={background}
            style={styles.backgroundContainer}>
            <ScrollView style={global.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={{ width: 250, height: 250, marginBottom: 20, }} />
                </View>
                <View style={styles.tagContainer}>
                    <View style={styles.tags}>
                        <Text style={styles.tagsText}>{type}</Text>
                    </View>
                    <View style={styles.tags}>
                        <Text style={styles.tagsText}>{category}</Text>
                    </View>
                    {status && (
                        <View style={styles.tags2}>
                            <Text style={styles.tagsText2}>{status}</Text>
                        </View>
                    )}
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.subTitleText}>{subtitle}</Text>
                    {status === "In Progress" &&
                        <View>
                            <View style={styles.progressLine} />
                            <View style={styles.progressLineFull} />
                        </View>
                    }
                    <Text style={styles.descriptionTitle}>Course Description</Text>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>
                <CtaButton
                    status={status}
                    onPress={() => { console.log("Enroll") }} />
                <View style={{ height: 64 }}></View>
            </ScrollView>
        </ImageBackground>
    );
}

const CtaButton = ({ status, onPress }) => {
    let buttonText;
    let textColor;

    // Determine button text and text color based on status
    if (status === 'Completed') {
        buttonText = 'Completed';
        textColor = colors.titles;
    } else if (status === 'Registered') {
        buttonText = 'Access Training';
        textColor = colors.white;
    } else if (status) {
        buttonText = 'Continue training';
        textColor = colors.white;

    } else {
        buttonText = 'Enroll';
        textColor = colors.white;
    }
    return (
        <TouchableOpacity style={styles.ctaContainer}>
            <Image source={status === 'Completed' ? require('../assets/icons/cta_button_light.png') : require('../assets/icons/cta_button.png')}
                style={{ width: 350 }}
                resizeMode='contain'
            />
            <Text style={[styles.ctaText, { color: textColor }]}>{buttonText}</Text>
        </TouchableOpacity>
    );
};