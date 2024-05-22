import { View, ScrollView, Text, ImageBackground, TextInput } from 'react-native';
import { React, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


import CourseCard from '../components/CourseCard';
import styles from '../styles/CourseCatalogueScreen.styles';
import global from '../styles/global.styles.js';
import coursesData from '../data/courses.json';
import background from '../assets/images/background.png';
import CategoryFilters from '../components/CategoryFilters.js';
import TypeFilters from '../components/TypeFilters.js';

export default CourseCatalogueScreen = ({ navigation }) => {
    const [searchString, setSearchString] = useState('');
    const [filteredCourses, setFilteredCourses] = useState(coursesData);

    useEffect(() => {
        const filtered = coursesData.filter(course =>
            course.title.toLowerCase().includes(searchString.toLowerCase())
        );
        setFilteredCourses(filtered);
    }, [searchString]);

    const handleSearch = (text) => {
        setSearchString(text);
    };

    const handleCoursesFilter = (filteredCourses) => {
        setFilteredCourses(filteredCourses);
    };

    return (
        <ImageBackground source={background} style={styles.backgroundContainer}>
            <ScrollView style={global.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Course Catalogue</Text>
                    <Text style={styles.subTitleText}>Explore all our trainings here!</Text>
                </View>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={20} color="#aaa" />
                    <TextInput
                        onChangeText={handleSearch}
                        value={searchString}
                        style={styles.textInput}
                        placeholder="Search for...">
                    </TextInput>
                </View>
                <View>
                    <TypeFilters onPress={handleCoursesFilter} courses={coursesData} />
                </View>
                <View>
                    <CategoryFilters onPress={handleCoursesFilter} courses={coursesData} />
                </View>
                {filteredCourses
                .filter(course => !course.status || course.status === 'Not Enrolled')
                .map((course, index) => (
                    <CourseCard
                        key={index}
                        course={course}
                        onPress={() => navigation.navigate('CourseDetailScreen', {
                            id: course.id,
                            image: course.image,
                            title: course.title,
                            type: course.type,
                            category: course.category,
                            subtitle: course.subtitle,
                            description: course.description,
                            status: course.status || 'Not Enrolled',
                        })}
                    />
                ))}
                <View style={{ height: 64 }}></View>
            </ScrollView>
        </ImageBackground>
    );
};