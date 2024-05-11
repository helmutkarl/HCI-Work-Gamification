import { View, ScrollView, TouchableOpacity, Text, ImageBackground, TextInput, Image } from 'react-native';
import { React, useState, useEffect } from "react";

//Course images need to imported in same size and bigger//

import CourseCard from '../components/CourseCard';
import styles from '../styles/CourseCatalogueScreen.styles';
import coursesData from '../data/courses.json';
import background from '../assets/images/background.png';

export default CourseCatalogueScreen = ({ navigation }) => {
    const [searchString, setSearchString] = useState('');

    const renderItem = ({ item }) => {
        const handlePress = () => {
            navigation.navigate('CourseDetailScreen', {
                imageUrl: item.image,
                itemName: item.name,
                itemStatus: item.status,
                itemCategory: item.category,
                itemType: item.type,
                itemSubtitle: item.subtitle,
            });
        };
    }

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
            <ScrollView>
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
            </ScrollView>
        </ImageBackground>
    );
};