import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text , ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


import colors from '../config/colors.js'
import background from '../assets/images/background.png'

function LoginScreen(props) {
    return (
        <ImageBackground       
                source={background}
                style={styles.backgroundContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign In</Text>
                        <Icon name='keyboard-arrow-right' size={24} color={colors.white} />
                    </TouchableOpacity>
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