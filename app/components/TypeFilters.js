import { React, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';


import styles from '../styles/Filters.styles';

export default TypeFilters = ({ onPress, courses }) => {

    const [selectedTag, setSelectedTag] = useState("All");
    const [filteredCount, setFilteredCount] = useState('8');

    const tags = ["All", "Online Classroom", "e-Learning", "In person"];

    const handleTagPress = (tag) => {
        setSelectedTag(tag);
        let filteredCourses;
        switch (tag) {
            case "All":
                filteredCourses = courses;
                break;
            default:
                filteredCourses = courses.filter(course => course.type === tag);
        }
        setFilteredCount(filteredCourses.length);
        onPress(filteredCourses);
    };

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}>
            <View style={styles.tagContainer}>
                {tags.map((tag, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleTagPress(tag)}
                        style={[
                            styles.tags,
                            selectedTag === tag && styles.tagsSelected
                        ]}>
                        <Text style={[styles.tagsText, selectedTag === tag && styles.tagsTextSelected]}>{tag} {selectedTag === tag && `(${filteredCount})`}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
};

