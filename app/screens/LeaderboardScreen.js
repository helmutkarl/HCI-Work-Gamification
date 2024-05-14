import React from 'react';
import { View, ScrollView, Text, ImageBackground, Image } from 'react-native';


import background from '../assets/images/background.png';
import styles from '../styles/LeaderBoardScreen.styles.js';
import global from '../styles/global.styles.js';

export default LeaderboardScreen = () => {
    return (
        <ImageBackground
            source={background}
            style={styles.backgroundContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Leaderboard</Text>
                <Text style={styles.subTitleText}>Can you make it to the top?</Text>
            </View>
            <ScrollView style={global.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.leadersContainer}>
                    <Text style={styles.rankContainer}>1</Text>
                    <Image
                        source={require('../assets/images/person_image_1.png')}
                        style={[styles.image, { marginRight: 4 }]}
                        resizeMode="contain" />
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
                        resizeMode="contain" />
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
                        resizeMode="contain" />
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
                        resizeMode="contain" />
                    <View>
                        <Text style={styles.xps}>525 XP</Text>
                        <Text style={styles.name}>Nicole Mayr</Text>
                        <Text style={styles.position}>Talent Manager</Text>
                    </View>
                </View>
                <View style={styles.leadersContainer}>
                    <Text style={styles.rankContainer}>5</Text>
                    <Image
                        source={require('../assets/images/person_image_5.png')}
                        style={[styles.image, { marginRight: 4 }]}
                        resizeMode="contain" />
                    <View>
                        <Text style={styles.xps}>400 XP</Text>
                        <Text style={styles.name}>Stefan Holzinger</Text>
                        <Text style={styles.position}>Public Relations</Text>
                    </View>
                </View>
                <View style={{ height: 64 }}></View>
            </ScrollView>
        </ImageBackground>
    );
};