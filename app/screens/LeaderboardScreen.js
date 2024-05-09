import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text , ImageBackground, Image } from 'react-native';


import colors from '../config/colors.js'
import background from '../assets/images/background.png'

const LeaderboardScreen = () => {
    return (
        <ImageBackground       
                source={background}
                style={styles.backgroundContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Leaderboard</Text>
                <Text style={styles.subTitleText}>Can you make it to the top?</Text>
            </View>
            <ScrollView>
            <View style={styles.leadersContainer}>
                    <Text style={styles.rankContainer}>1</Text>
                        <Image                             
                            source={require('../assets/images/person_image_1.png')} 
                            style={[styles.image, { marginRight: 4 }]}
                            resizeMode="contain"/>
                            <View>
                                <Text style={styles.xps}>1130 XP</Text>
                                <Text style={styles.name}>Petra Kabelbinder</Text>
                                <Text style={styles.position}>Operations Manager</Text>
                            </View>
                </View>
                <View style={styles.leadersContainer}>
                    <Text style={styles.rankContainer}>2</Text>
                        <Image                             
                            source={require('../assets/images/person_image_2.png')} 
                            style={[styles.image, { marginRight: 4 }]}
                            resizeMode="contain"/>
                            <View>
                                <Text style={styles.xps}>1640 XP</Text>
                                <Text style={styles.name}>Anna-Louisa Winkler</Text>
                                <Text style={styles.position}>Financial Analyst</Text>
                            </View>
                </View>
                <View style={styles.leadersContainer}>
                    <Text style={styles.rankContainer}>3</Text>
                        <Image                             
                            source={require('../assets/images/person_image_3.png')} 
                            style={[styles.image, { marginRight: 4 }]}
                            resizeMode="contain"/>
                            <View>
                                <Text style={styles.xps}>600 XP</Text>
                                <Text style={styles.name}>Louis Mender</Text>
                                <Text style={styles.position}>Janitor</Text>
                            </View>
                </View>
                <View style={styles.leadersContainer}>
                    <Text style={styles.rankContainer}>4</Text>
                        <Image                             
                            source={require('../assets/images/person_image_4.png')} 
                            style={[styles.image, { marginRight: 4 }]}
                            resizeMode="contain"/>
                            <View>
                                <Text style={styles.xps}>525 XP</Text>
                                <Text style={styles.name}>Nicole Mayr</Text>
                                <Text style={styles.position}>Talent Manager</Text>
                            </View>
                </View>
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


    leadersContainer: {
        marginTop: 30,
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

    rankContainer: {
        color: colors.secondary,
        fontSize: 100,
        marginLeft: 300,
        marginTop: -64,
        fontWeight: '900',
        position: 'absolute'
    },

    xps: {
        color: colors.text,
        fontSize: 24,
        marginTop: 45,
        marginLeft: 12,
        fontWeight: '900',
        marginBottom: 5,
    },

    name: {
        color: colors.text,
        fontSize: 16,
        marginLeft: 12,
        fontWeight: '900',
        marginBottom: 5,
    },
    position: {
        color: colors.text,
        fontSize: 12,
        marginLeft: 12,
        marginTop:-5,
    },
})

export default LeaderboardScreen;
