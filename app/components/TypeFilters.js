import { React, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/Filters.styles';

export default TypeFilters = ({onPress, courses}) => {

        const [selectedTag, setSelectedTag] = useState("All");
    
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
                        <Text style={[styles.tagsText, selectedTag === tag && styles.tagsTextSelected]}>{tag}</Text>
                        </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
};

