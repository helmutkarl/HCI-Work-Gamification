import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';

import BackgroundComponent from '../components/background.js';
import colors from '../config/colors.js'

const LeaderboardScreen = () => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Leaderboard</Text>
            <Text style={styles.subTitleText}>Can you make it to the top?</Text>
        </View>
       

    );
}

const styles = StyleSheet.create({
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
})

export default LeaderboardScreen;
