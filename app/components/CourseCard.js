import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/CourseCard.styles';

export default CourseCard = ({ course, onPress }) => {
    return (
        <TouchableOpacity style={styles.courseContainer} onPress={onPress}>
            <Image
                source={{ uri: course.image }}
                style={styles.image}
                resizeMode="contain" />
            <View>
                <Text style={styles.courseType}>{course.type}</Text>
                {course.status === "In Progress" &&
                    <View>
                        <View style={styles.progressLine} />
                        <View style={styles.progressLineFull} />
                    </View>
                }
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
