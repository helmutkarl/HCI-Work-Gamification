import { React, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../styles/Filters.styles';

export default CategoryFilters = ({ onPress, courses }) => {

    const [selectedTag, setSelectedTag] = useState("All");
    const [filteredCount, setFilteredCount] = useState(courses.length);

    const tags = ["All", "IT", "Management", "Design", "Soft Skills", "Languages"];

    const handleTagPress = (tag) => {
        setSelectedTag(tag);
        let filteredCourses;
        switch (tag) {
            case "All":
                filteredCourses = courses;
                break;
            default:
                filteredCourses = courses.filter(course => course.category === tag);
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

