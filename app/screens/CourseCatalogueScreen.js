import { View, ScrollView, TouchableOpacity, Text, ImageBackground, TextInput, Image } from 'react-native';
import { React, useState, useEffect } from "react";

//Course images need to imported in same size and bigger//

import CourseCard from '../components/CourseCard';
import styles from '../styles/CourseCatalogueScreen.styles';
import global from '../styles/global.styles.js';
import coursesData from '../data/courses.json';
import background from '../assets/images/background.png';

export default CourseCatalogueScreen = ({ navigation }) => {
    const [searchString, setSearchString] = useState('');


    return (
        <ImageBackground source={background} style={styles.backgroundContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Course Catalogue</Text>
                <Text style={styles.subTitleText}>Explore all our trainings here!</Text>
            </View>
            <TextInput
                onChangeText={text => setSearchString(text)}
                style={styles.textInput}
                placeholder="Search for...">
            </TextInput>
            <ScrollView style={global.scrollView} showsVerticalScrollIndicator={false}>
                {coursesData.map((course, index) => (
                    <CourseCard
                        key={index}
                        course={{
                            ...course,
                            image: { uri: course.image }
                        }}
                        onPress={() => navigation.navigate('CourseDetailScreen', { image: imageURL })}
                    />
                ))}
                <View style={{ height: 64 }}></View>
            </ScrollView>
        </ImageBackground>
    );
};