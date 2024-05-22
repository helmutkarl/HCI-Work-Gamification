import React, { useState, useEffect } from 'react';
import { ScrollView, ImageBackground, Image, View, Text } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

import background from '../assets/images/background.png';
import styles from '../styles/ProfileScreen.styles.js';
import global from '../styles/global.styles.js';
import coursesData from '../data/courses.json';
import { useAuth } from '../components/AuthContext.js';
import CourseCard from '../components/CourseCard';
import ProfileStats from '../components/ProfileStats';
import StatusFilters from '../components/StatusFilters';
import Charts from '../components/Charts';

export default ProfileScreen = ({ navigation }) => {
    const { user, logout } = useAuth();
    const getCourseDetails = (courseId) => coursesData.find(course => course.id === courseId);
    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        if (user) {
            setFilteredCourses(user.courses);
        }
    }, [user]);

    const selectOptionType = (value) => {
        if (value === 'Back to Login') {
            logout();
        }
    };

    const handleCoursesFilter = (filteredCourses) => {
        setFilteredCourses(filteredCourses);
    };

    if (!user) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <ImageBackground source={background} style={styles.backgroundContainer}>
            <ScrollView style={global.scrollView} showsVerticalScrollIndicator={false} stickyHeaderIndices={[5]}>
                <Menu onSelect={selectOptionType} style={styles.settingsContainer}>
                    <MenuTrigger>
                        <Image source={require('../assets/icons/settings.png')} style={{ width: 30, height: 30 }} />
                    </MenuTrigger>
                    <MenuOptions customStyles={{ optionText: styles.settingsText }}>
                        <View style={styles.settingsContainer} />
                        <MenuOption value="Normal" disabled={true} text='Account Information' />
                        <MenuOption value="N/A" disabled={true} text='Notifications' />
                        <MenuOption value="Back to Login" text='Logout' />
                    </MenuOptions>
                </Menu>

                <View style={styles.profileImageContainer}>
                    <Image
                        source={{ uri: user.image }}
                        style={{ width: 220, height: 220 }}
                        resizeMode="contain"
                    />
                </View>
                <View>
                    <ProfileStats user={user} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{user.name}</Text>
                    <Text style={styles.subTitleText}>{user.role}</Text>
                </View>
                <Charts userProfile={user} />
                <View style={{ paddingTop: 32 }}>
                    <StatusFilters users={[user]} userId={user.id} onPress={handleCoursesFilter} />
                </View>
                {filteredCourses.map((courseProfile, index) => {
                    const course = getCourseDetails(courseProfile.id);
                    return (
                        <CourseCard
                            key={index}
                            course={{
                                ...course,
                                image: course.image,
                                status: courseProfile.status,
                                title: course.title,
                                type: course.type,
                                category: course.category,
                                subtitle: course.subtitle,
                                description: course.description,
                            }}
                            onPress={() => navigation.navigate('CourseDetailScreen', {
                                status: courseProfile.status,
                                image: course.image,
                                title: course.title,
                                type: course.type,
                                category: course.category,
                                subtitle: course.subtitle,
                                description: course.description,
                                id: course.id,
                            })}
                        />
                    );
                })}
                <View style={{ height: 64 }}></View>
            </ScrollView>
        </ImageBackground>
    );
};