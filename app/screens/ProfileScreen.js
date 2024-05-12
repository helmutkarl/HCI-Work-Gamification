import { React, useState } from 'react';
import { ScrollView, ImageBackground, Image, View, Text , Animated} from 'react-native';
import background from '../assets/images/background.png';
import styles from '../styles/ProfileScreen.styles.js';
import global from '../styles/global.styles.js';
import usersData from '../data/users.json';
import coursesData from '../data/courses.json';
import { activeUserId } from '../config/config.js';
import CourseCard from '../components/CourseCard';
import ProfileStats from '../components/ProfileStats';
import StatusFilters from '../components/StatusFilters.js';


export default ProfileScreen = ({ navigation, users}) => {
    const userProfile = usersData.find(user => user.id === activeUserId);
    const getCourseDetails = (courseId) => coursesData.find(course => course.id === courseId);

    const [filteredCourses, setFilteredCourses] = useState([]);
    const handleCoursesFilter = (filteredCourses) => {
        setFilteredCourses(filteredCourses);
    };

    return (
        <ImageBackground source={background} style={styles.backgroundContainer}>
            <ScrollView style={global.scrollView} showsVerticalScrollIndicator={false} stickyHeaderIndices={[3]}>
                <View style={styles.profileImageContainer}>
                    <Image
                        source={{ uri: userProfile.image }}
                        style={{ width: 220, height: 220 }}
                        resizeMode="contain"
                    />
                </View>
                <View>
                    <ProfileStats user={userProfile}/>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{userProfile.name}</Text>
                    <Text style={styles.subTitleText}>{userProfile.role}</Text>
                </View>
                <View>
                    <StatusFilters users={[userProfile]}  userId={activeUserId} onPress={handleCoursesFilter}/>
                </View>
                {filteredCourses.map((courseProfile, index) => {
                    const course = getCourseDetails(courseProfile.id);
                    return (
                        <CourseCard
                            key={index}
                            course={{
                                ...course,
                                image: { uri: course.image },
                                status: courseProfile.status
                            }}
                            onPress={() => navigation.navigate('CourseDetailScreen', { course })}
                        />
                    );
                })}
                <View style={{ height: 64 }}></View>
            </ScrollView>
        </ImageBackground>
    );
};


