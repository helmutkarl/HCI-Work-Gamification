import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';

import BackgroundComponent from '../components/background.js';
import colors from '../config/colors.js'


const CourseCatalogueScreen = () => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Course Catalogue</Text>
            <Text style={styles.subTitleText}>Explore all our trainings here!</Text>
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

export default CourseCatalogueScreen;
