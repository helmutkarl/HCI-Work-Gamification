import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import BackgroundComponent from '../components/background.js';

function LoginScreen(props) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.loginButton}>

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
    loginButton: {
        width: '100%',
        height: 75,
        backgroundColor: '#fc5c65'
    }
})

export default LoginScreen;