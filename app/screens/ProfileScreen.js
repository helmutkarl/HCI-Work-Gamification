import React from 'react';
import { ScrollView, ImageBackground, Image, View, Text } from 'react-native';
import background from '../assets/images/background.png';
import styles from '../styles/ProfileScreen.styles';
import usersData from '../data/users.json';
import coursesData from '../data/courses.json';
import { activeUserId } from '../config/config.js';
import CourseCard from '../components/CourseCard';

export default ProfileScreen = ({ navigation }) => {
    const userProfile = usersData.find(user => user.id === activeUserId);
    const getCourseDetails = (courseId) => coursesData.find(course => course.id === courseId);

    return (
        <ImageBackground source={background} style={styles.backgroundContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.profileImageContainer}>
                    <Image
                        source={{ uri: userProfile.image }}
                        style={{ width: 220, height: 220 }}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{userProfile.name}</Text>
                    <Text style={styles.subTitleText}>{userProfile.role}</Text>
                </View>
                {userProfile.courses.map((courseProfile, index) => {
                    const course = getCourseDetails(courseProfile.id);
                    return (
                        <CourseCard
                            key={index}
                            course={{
                                ...course,
                                image: { uri: course.image },
                                status: courseProfile.status  // Include status
                            }}
                            onPress={() => navigation.navigate('CourseDetailScreen', { course })}
                        />
                    );
                })}
            </ScrollView>
        </ImageBackground>
    );
};