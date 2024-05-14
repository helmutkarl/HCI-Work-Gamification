import { React, useState, useEffect } from 'react';
import { ScrollView, ImageBackground, Image, View, Text } from 'react-native';
import background from '../assets/images/background.png';
import styles from '../styles/ProfileScreen.styles.js';
import global from '../styles/global.styles.js';
import usersData from '../data/users.json';
import coursesData from '../data/courses.json';
import { activeUserId } from '../config/config.js';
import CourseCard from '../components/CourseCard';
import ProfileStats from '../components/ProfileStats';
import StatusFilters from '../components/StatusFilters.js';
import Charts from '../components/Charts.js';
import Menu, {MenuOptions,MenuOption,MenuTrigger,} from 'react-native-popup-menu';


export default ProfileScreen = ({ navigation }) => {
    const userProfile = usersData.find(user => user.id === activeUserId);
    const getCourseDetails = (courseId) => coursesData.find(course => course.id === courseId);
    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        if (userProfile) {
            setFilteredCourses(userProfile.courses);
        }
    }, [userProfile]);

    const selectOptionType = (value) => {
        if (value === 'Back to Login') {
            navigation.navigate('LoginScreen');
        }
    };
    
    useEffect(() => {
        const coursesData = userProfile.courses
        setFilteredCourses(coursesData);
    }, []);

    const handleCoursesFilter = (filteredCourses) => {
        setFilteredCourses(filteredCourses);
    };

    return (

        <ImageBackground source={background} style={styles.backgroundContainer}>

            <ScrollView style={global.scrollView} showsVerticalScrollIndicator={false} stickyHeaderIndices={[5]}>
                    <Menu onSelect={selectOptionType} style={styles.settingsContainer}>
                        <MenuTrigger>
                            <Image source={require('../assets/icons/settings.png')} style={{ width: 30, height: 30}} />
                        </MenuTrigger>
                        <MenuOptions customStyles={{optionText: styles.settingsText }}>
                        <View style={styles.settingsContainer}/>
                            <MenuOption value="Normal" disabled={true} text='Account Information' />
                            <MenuOption value="N/A" disabled={true} text='Notifications' />
                            <MenuOption value="Back to Login" text='Logout' />
                        </MenuOptions>
                    </Menu>
                
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
                <Charts userProfile={userProfile} />
                <View style={{paddingTop: 35}}>
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
                                status: courseProfile.status,
                                title: course.title,
                                type: course.type,
                                category: course.category,
                                subtitle: course.subtitle,
                                description: course.description,
                            }}
                            onPress={() => navigation.navigate('CourseDetailScreen', { 
                                status: courseProfile.status, 
                                image : course.image,                             
                                title: course.title,
                                type: course.type,
                                category: course.category,
                                subtitle: course.subtitle,
                                description: course.description,
                            })}
                        />
                    );
                })}
                <View style={{ height: 64 }}></View>
            </ScrollView>
        </ImageBackground>
    );
};


