
import { StyleSheet, View, ScrollView, TouchableOpacity, Text , ImageBackground, TextInput, Image } from 'react-native';
import { React, useState , useEffect} from "react";


//Course images need to imported in same size and bigger//

import colors from '../config/colors.js'
import background from '../assets/images/background.png'


const CourseCatalogueScreen = (navigation) => {
    const [searchString, setSearchString] = useState('')

    return (
        <ImageBackground       
                source={background}
                style={styles.backgroundContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Course Catalogue</Text>
                <Text style={styles.subTitleText}>Explore all our trainings here!</Text>
            </View>
            <View>
                <TextInput 
                        onChangeText={text => setSearchString(text)}
                        style = {styles.textInput}
                        placeholder = "Search for...">
                </TextInput>
            </View>

            <ScrollView>
                <TouchableOpacity
                    style={styles.courseContainer} 
                    onPress = {() => navigation.navigate('CourseDetailScreen', {})}>
                        <Image                             
                            source={require('../assets/images/course_image_powerbi_small.png')} 
                            style={[styles.image, { marginRight: 4 }]}
                            resizeMode="contain"/>
                            <View>
                                <Text style={styles.courseCategory}>Online Classroom</Text>
                                <Text style={styles.courseTitle}>Power BI</Text>
                                <Text style={styles.courseSubTitle}>22.05.2023 | 6 h | 250 XP</Text>
                            </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.courseContainer} 
                    onPress = {() => navigation.navigate('CourseDetailScreen', {})}>
                        <Image                             
                            source={require('../assets/images/course_image_excel_small.png')} 
                            style={[styles.image, { marginRight: -6 }]}
                            resizeMode="contain"/>
                            <View>
                                <Text style={styles.courseCategory}>e-Learning</Text>
                                <Text style={styles.courseTitle}>Excel</Text>
                                <Text style={styles.courseSubTitle}>6 h | 250 XP</Text>
                            </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.courseContainer} 
                    onPress = {() => navigation.navigate('CourseDetailScreen', {})}>
                        <Image                             
                            source={require('../assets/images/course_image_powerbi_small.png')} 
                            style={[styles.image, { marginRight: 4 }]}
                            resizeMode="contain"/>
                            <View>
                                <Text style={styles.courseCategory}>Online Classroom</Text>
                                <Text style={styles.courseTitle}>Power BI</Text>
                                <Text style={styles.courseSubTitle}>22.05.2023 | 6 h | 250 XP</Text>
                            </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.courseContainer} 
                    onPress = {() => navigation.navigate('CourseDetailScreen', {})}>
                        <Image                             
                            source={require('../assets/images/course_image_powerbi_small.png')} 
                            style={[styles.image, { marginRight: 4 }]}
                            resizeMode="contain"/>
                            <View>
                                <Text style={styles.courseCategory}>Online Classroom</Text>
                                <Text style={styles.courseTitle}>Power BI</Text>
                                <Text style={styles.courseSubTitle}>22.05.2023 | 6 h | 250 XP</Text>
                            </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.courseContainer} 
                    onPress = {() => navigation.navigate('CourseDetailScreen', {})}>
                        <Image                             
                            source={require('../assets/images/course_image_excel_small.png')} 
                            style={[styles.image, { marginRight: -6 }]}
                            resizeMode="contain"/>
                            <View>
                                <Text style={styles.courseCategory}>e-Learning</Text>
                                <Text style={styles.courseTitle}>Excel Advanced</Text>
                                <Text style={styles.courseSubTitle}>6 h | 250 XP</Text>
                            </View>
                </TouchableOpacity>
            </ScrollView>

        </ImageBackground>     
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
    },

    titleContainer: {
        marginTop: 50,
        paddingHorizontal: 10,
        paddingVertical: 20,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'left,'
    },

    textInput: {
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        margin: 18,
        backgroundColor: colors.white,
        flexDirection: 'column',
        alignItems: 'left',
        borderRadius: 12,
        elevation: 5,
        shadowRadius: 12,
    },

    courseContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        margin: 18,
        backgroundColor: '#f8fce7',
        flexDirection: 'row',
        alignItems: 'left',
        borderRadius: 12,
        elevation: 5,
        shadowRadius: 12,
    },

    courseTextContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        margin: 18,
        backgroundColor: '#f8fce7',
        flexDirection: 'column',
        alignItems: 'left',
        borderRadius: 12,
        elevation: 5,
        shadowRadius: 12,
    },

    courseCategory: {
        color: colors.secondary,
        fontSize: 14,
        marginLeft: 8,
        fontWeight: '700',
        marginBottom: 20,
    },

    courseTitle: {
        color: colors.titles,
        fontSize: 16,
        marginLeft: 8,
        fontWeight: '900',
        marginBottom: 5,
    },
    courseSubTitle: {
        color: colors.titles,
        fontSize: 14,
        left: 8,
        fontWeight: '500',
    },

    titleText: {
        color: colors.titles,
        fontSize: 32,
        marginLeft: 8,
        fontWeight: '900'
    },

    subTitleText: {
        color: colors.titles,
        fontSize: 16,
        marginLeft: 8,
        fontWeight: '500'
    },
})

export default CourseCatalogueScreen;
