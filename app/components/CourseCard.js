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
            <View style={styles.textContainer}>
                {!(course.status === "In Progress" || course.status === "Completed" || course.status === "Enrolled" || course.special_status != "popular") &&
                    <View style={styles.popularContainer}>
                        <Image source={require('../assets/icons/popular.png')} style={{ width: 50, resizeMode: "contain"}}  />
                    </View>
                }
                {!(course.status === "In Progress" || course.status === "Completed" || course.status === "Enrolled" || course.special_status != "picked") &&
                    <View style={styles.pickedContainer}>
                        <Image source={require('../assets/icons/picked.png')} style={{ width: 60, resizeMode: "contain"}}  />
                    </View>
                }
                {course.status === "In Progress" &&
                    <View style={styles.percentagContainer}>
                        <Text style={styles.percentageText}>75%</Text>
                    </View>
                }
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
                    <View style={styles.statusTagsContainer}>
                                        {course.mandatory == true &&
                    <View style={styles.statusTags}>
                        <Text style={styles.statusTagsText2}>Mandatory</Text>
                    </View>
                }
                        <View style={styles.statusTags}>
                            <Text style={styles.statusTagsText}>{course.status}</Text>
                        </View>
                    </View>
                }
            </View>
        </TouchableOpacity>
    );
};
