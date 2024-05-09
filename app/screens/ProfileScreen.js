import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text , ImageBackground , Image} from 'react-native';
import { Platform } from 'react-native';


import colors from '../config/colors.js'
import background from '../assets/images/background.png'

const ProfileScreen = () => {
    return (
        <ImageBackground       
                source={background}
                style={styles.backgroundContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>              
                <View style={styles.profileImageContainer}>
                    <Image
                        source={require('../assets/images/profile_image.png')} 
                        style={styles.image}
                        resizeMode="contain" 
                    />
                </View>
                <View style={styles.tagContainer}>
                    <View style={styles.tags}>
                        <Text style={styles.tagsText}>525 XP</Text>
                    </View>
                    <View style={styles.tags}>
                        <Image
                            source={require('../assets/icons/trophy.png')} 
                            style={[styles.image, { marginRight: 4 }]}
                            resizeMode="contain"/>
                        <Text style={styles.tagsText}>4th</Text>
                    </View>
                    <View style={styles.tags}>
                        <Image
                            source={require('../assets/icons/clock.png')} 
                            style={[styles.image, { marginRight: 4 }]}
                            resizeMode="contain"/>
                        <Text style={styles.tagsText}>36h</Text>
                    </View>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Nicole Mayr</Text>
                    <Text style={styles.subTitleText}>Talent Manager</Text>
                </View>


                <TouchableOpacity
                    style={styles.courseContainer} 
                    onPress = {() => navigation.navigate('CourseDetailScreen', {})}>
                        <Image                             
                            source={require('../assets/images/course_image_excel_small.png')} 
                            style={[styles.image, { marginRight: -6 }]}
                            resizeMode="contain"/>
                            <View>
                                <Text style={styles.courseCategory}>e-Learning</Text>
                                <View style={styles.progressLine}/>
                                <View style={styles.progressLineFull}/>
                                <Text style={styles.courseTitle}>Excel Advanced</Text>
                                <Text style={styles.courseSubTitle}>6 h | 250 XP</Text>
                            </View>
                            <View style= {{...styles.statusTags, marginTop: 83, marginLeft: 55,}}>
                                <Text style={styles.statusTagsText}>In Progress</Text>
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
                            <View style= {{...styles.statusTags, marginLeft: 25,}}>
                                <Text style={styles.statusTagsText}>Registered</Text>
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
                            <View style= {{...styles.statusTags, marginTop: 83,marginLeft: 100,}}>
                                <Text style={styles.statusTagsText}>Completed</Text>
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
                                <Text style={styles.courseTitle}>Power BI Dashboards</Text>
                                <Text style={styles.courseSubTitle}>22.05.2023 | 6 h | 250 XP</Text>
                            </View>
                            <View style= {{...styles.statusTags, marginLeft: 25,}}>
                                <Text style={styles.statusTagsText}>Completed</Text>
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
                                <Text style={styles.courseTitle}>Power BI Advanced</Text>
                                <Text style={styles.courseSubTitle}>22.05.2023 | 6 h | 250 XP</Text>
                            </View>
                            <View style= {{...styles.statusTags, marginLeft: 25,}}>
                                <Text style={styles.statusTagsText}>Completed</Text>
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
    
    profileImageContainer: {
        marginTop: 50,
        paddingHorizontal: 10,
        paddingVertical: 10,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'center',
    },
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tags: {
        margin: 5,
        paddingHorizontal: 18,
        paddingVertical: 7,
        borderRadius: 15,
        elevation: 5,
        shadowRadius: 12,
        overflow: "hidden",
        backgroundColor: '#f8f7d8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },

    titleContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'center',
    },

    courseContainer: {
        marginTop: 10,
        paddingBottom: 13,
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
    
    statusTags: {
        marginTop: 80,
        marginLeft: 92,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 15,
        elevation: 5,
        shadowRadius: 12,
        overflow: "hidden",
        backgroundColor: '#EAF8BF',
        //flexDirection: 'row',
        alignItems: 'right',
        justifyContent: "right",
    },

    statusTagsText: {
        color: '#27476E',
        fontSize: 12,
        fontWeight: '500'
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
        marginLeft: 8,
        fontWeight: '500',
    },
    
    tagsText: {
        color: colors.secondary,
        fontSize: 16,
        fontWeight: '900'
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

    progressLine: {
        opacity: 0.3,
        height: 3,
        borderTopWidth: 3,
        borderColor: '#27476E',
        borderStyle: "solid",
        marginTop:28,
        width: 230,
        marginLeft: 8,
        position: "absolute",
      },

      progressLineFull: {
        height: 3,
        borderTopWidth: 3,
        borderColor: '#27476E',
        borderStyle: "solid",
        marginTop:28,
        width: 150,
        marginLeft: 8,
        position: "absolute",
      },
})

export default ProfileScreen;
