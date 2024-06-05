import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, ImageBackground, Image, Alert } from 'react-native';

import background from '../assets/images/background.png';
import styles from '../styles/CourseDetailScreen.styles.js';
import global from '../styles/global.styles.js';
import colors from '../config/colors';
import { useAuth } from '../components/AuthContext.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default CourseDetailScreen = ({ route }) => {
    const { image, title, type, category, subtitle, target_group, mandatory, training_objectives, description, status: initialStatus, id } = route.params || {};
    const { user, setUser } = useAuth();
    const [status, setStatus] = useState(initialStatus);

    // Checking if the user is enrolled in the course
    useEffect(() => {
        if (user) {
            const course = user.courses.find(course => course.id === id);
            if (course) {
                setStatus(course.status);
            }
        }
    }, [user, id]);

    const enrollCourse = async () => {
        if (user) {
            const courseExists = user.courses.some(course => course.id === id);
            if (!courseExists) {
                const updatedUser = {
                    ...user,
                    courses: [...user.courses, { id, status: 'Enrolled' }]
                };
                setUser(updatedUser);
                try {
                    await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
                    Alert.alert("Success", "You have successfully enrolled in this course!");
                } catch (error) {
                    console.log(error);
                }
            }
        } else {
            Alert.alert("Error", "Could not enroll in this course.");
        }
    };

    return (
        <ImageBackground
            source={background}
            style={styles.backgroundContainer}>
            <ScrollView style={global.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={{ width: 250, height: 250, marginBottom: 20, }} />
                </View>
                <ScrollView            
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={true}>
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
                    {mandatory == true &&
                        <View style={styles.tags2}>
                        <Text style={styles.tagsText3}>Mandatory</Text>
                    </View>
                    }
                </View>         
                </ScrollView>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.subTitleText}>{subtitle}</Text>
                    {status === "In Progress" &&
                        <View style={styles.percentagContainer}>
                               <Text style={styles.subTitleText}>75%</Text>
                        </View>
                    }
                    {status === "In Progress" &&
                        <View>
                            <View style={styles.progressLine} />
                            <View style={styles.progressLineFull} />
                        </View>
                    }
                    <Text style={styles.descriptionTitle}>Target Group</Text>
                    <Text style={styles.descriptionText}>{target_group}</Text>
                    <Text style={styles.descriptionTitle}>Training Objectives</Text>
                    <Text style={styles.descriptionText}>{training_objectives}</Text>
                    <Text style={styles.descriptionTitle}>Course Description</Text>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>
                <CtaButton
                    status={status}
                    user={user}
                    courseId={id}
                    onPress={() => enrollCourse()} />
                <View style={{ height: 64 }}></View>
            </ScrollView>
        </ImageBackground>
    );
}

const CtaButton = ({ status, user, courseId, onPress }) => {
    let buttonText;
    let textColor;

    const courseExists = user && user.courses.some(course => course.id === courseId);

    // Determining button text and text color based on status
    if (status === 'Completed') {
        buttonText = 'Completed';
        textColor = colors.titles;
    } else if (courseExists) {
        buttonText = 'Continue training';
        textColor = colors.white;
    } else {
        buttonText = 'Enroll';
        textColor = colors.white;
    }
    return (
        <TouchableOpacity style={styles.ctaContainer} onPress={onPress}>
            <Image source={status === 'Completed' ? require('../assets/icons/cta_button_light.png') : require('../assets/icons/cta_button.png')}
                style={{ width: 350 }}
                resizeMode='contain'
            />
            <Text style={[styles.ctaText, { color: textColor }]}>{buttonText}</Text>
        </TouchableOpacity>
    );
};