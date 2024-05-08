import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BackgroundComponent from '../components/background.js';
import colors from '../config/colors.js'

function LoginScreen(props) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                    <Icon name='keyboard-arrow-right' size={24} color={colors.white} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 0,
        paddingTop: 64
    },
    button: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        margin: 8,
        backgroundColor: colors.primary,
        flexDirection: 'row'
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        marginLeft: 8,
        fontWeight: '500'
    }
})

export default LoginScreen;