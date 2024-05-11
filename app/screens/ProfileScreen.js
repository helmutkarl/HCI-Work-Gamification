import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';

//Images need to be imported in a bigger size!!!

import background from '../assets/images/background.png';
import styles from '../styles/ProfileScreen.styles.js';

export default ProfileScreen = () => {
    return (
        <ImageBackground
            source={background}
            style={styles.backgroundContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.profileImageContainer}>
                    <Image
                        source={require('../assets/images/profile_image.png')}
                        style={{ width: 220, height: 220, }}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.tagContainer}>
                    <View style={styles.tags}>
                        <Text style={styles.tagsText}>525 XP</Text>
                    </View>
                    <View style={styles.tags}>
                        <Image
                            source={require('../assets/icons/trophy.png')}
                            style={[styles.image, { marginRight: 4 }]}
                            resizeMode="contain" />
                        <Text style={styles.tagsText}>4th</Text>
                    </View>
                    <View style={styles.tags}>
                        <Image
                            source={require('../assets/icons/clock.png')}
                            style={[styles.image, { marginRight: 4 }]}
                            resizeMode="contain" />
                        <Text style={styles.tagsText}>36h</Text>
                    </View>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Nicole Mayr</Text>
                    <Text style={styles.subTitleText}>Talent Manager</Text>
                </View>

                <TouchableOpacity
                    style={styles.courseContainer}
                    onPress={() => navigation.navigate('CourseDetailScreen', {})}>
                    <Image
                        source={require('../assets/images/course_image_excel_small.png')}
                        style={[styles.image, { marginRight: -6 }]}
                        resizeMode="contain" />
                    <View>
                        <Text style={styles.courseCategory}>e-Learning</Text>
                        <View style={styles.progressLine} />
                        <View style={styles.progressLineFull} />
                        <Text style={styles.courseTitle}>Excel Advanced</Text>
                        <Text style={styles.courseSubTitle}>6 h | 250 XP</Text>
                    </View>
                    <View style={{ ...styles.statusTags, marginTop: 83, marginLeft: 55, }}>
                        <Text style={styles.statusTagsText}>In Progress</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.courseContainer}
                    onPress={() => navigation.navigate('CourseDetailScreen', {})}>
                    <Image
                        source={require('../assets/images/course_image_powerbi_small.png')}
                        style={[styles.image, { marginRight: 4 }]}
                        resizeMode="contain" />
                    <View>
                        <Text style={styles.courseCategory}>Online Classroom</Text>
                        <Text style={styles.courseTitle}>Power BI</Text>
                        <Text style={styles.courseSubTitle}>22.05.2023 | 6 h | 250 XP</Text>
                    </View>
                    <View style={{ ...styles.statusTags, marginLeft: 25, }}>
                        <Text style={styles.statusTagsText}>Registered</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.courseContainer}
                    onPress={() => navigation.navigate('CourseDetailScreen', {})}>
                    <Image
                        source={require('../assets/images/course_image_excel_small.png')}
                        style={[styles.image, { marginRight: -6 }]}
                        resizeMode="contain" />
                    <View>
                        <Text style={styles.courseCategory}>e-Learning</Text>
                        <Text style={styles.courseTitle}>Excel</Text>
                        <Text style={styles.courseSubTitle}>6 h | 250 XP</Text>
                    </View>
                    <View style={{ ...styles.statusTags, marginTop: 83, marginLeft: 100, }}>
                        <Text style={styles.statusTagsText}>Completed</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.courseContainer}
                    onPress={() => navigation.navigate('CourseDetailScreen', {})}>
                    <Image
                        source={require('../assets/images/course_image_powerbi_small.png')}
                        style={[styles.image, { marginRight: 4 }]}
                        resizeMode="contain" />
                    <View>
                        <Text style={styles.courseCategory}>Online Classroom</Text>
                        <Text style={styles.courseTitle}>Power BI Dashboards</Text>
                        <Text style={styles.courseSubTitle}>22.05.2023 | 6 h | 250 XP</Text>
                    </View>
                    <View style={{ ...styles.statusTags, marginLeft: 25, }}>
                        <Text style={styles.statusTagsText}>Completed</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.courseContainer}
                    onPress={() => navigation.navigate('CourseDetailScreen', {})}>
                    <Image
                        source={require('../assets/images/course_image_powerbi_small.png')}
                        style={[styles.image, { marginRight: 4 }]}
                        resizeMode="contain" />
                    <View>
                        <Text style={styles.courseCategory}>Online Classroom</Text>
                        <Text style={styles.courseTitle}>Power BI Advanced</Text>
                        <Text style={styles.courseSubTitle}>22.05.2023 | 6 h | 250 XP</Text>
                    </View>
                    <View style={{ ...styles.statusTags, marginLeft: 25, }}>
                        <Text style={styles.statusTagsText}>Completed</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    );
};