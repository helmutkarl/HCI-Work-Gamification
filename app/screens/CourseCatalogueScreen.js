import { View, ScrollView, TouchableOpacity, Text, ImageBackground, TextInput, Image } from 'react-native';
import { React, useState, useEffect } from "react";


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
            <TextInput
                onChangeText={text => setSearchString(text)}
                style={styles.textInput}
                placeholder="Search for...">
            </TextInput>
            <View>
                <TypeFilters onPress={handleCoursesFilter} courses={coursesData}/>
            </View>
            <View>
                <CategoryFilters onPress={handleCoursesFilter} courses={coursesData}/>
            </View>
                {filteredCourses.map((course, index) => (
                    <CourseCard
                        key={index}
                        course={{
                            ...course,
                            image: { uri: course.image },
                            title: course.title,
                            type: course.type,
                            category: course.category,
                            subtitle: course.subtitle,
                            description: course.description,
                        }}
                        onPress={() => navigation.navigate('CourseDetailScreen', {
                            image : course.image,                             
                            title: course.title,
                            type: course.type,
                            category: course.category,
                            subtitle: course.subtitle,
                            description: course.description,
                        })}
                    />
                ))}
                <View style={{ height: 64 }}></View>
            </ScrollView>
        </ImageBackground>
    );
};