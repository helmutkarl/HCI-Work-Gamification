import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/CourseCard.styles';

export default CourseCard = ({ course, onPress }) => {
    return (
        <TouchableOpacity style={styles.courseContainer} onPress={onPress}>
            <Image
                source={course.image}
                style={styles.image}
                resizeMode="contain" />
            <View>
                <Text style={styles.courseCategory}>{course.category}</Text>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseSubTitle}>{course.subtitle}</Text>
                {course.status &&
                    <View style={styles.statusTags}>
                        <Text style={styles.statusTagsText}>{course.status}</Text>
                    </View>
                }
            </View>
        </TouchableOpacity>
    );
};
