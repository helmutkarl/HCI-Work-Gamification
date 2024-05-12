import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, ImageBackground, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../config/colors.js';
import background from '../assets/images/background.png';
import styles from '../styles/LoginScreen.styles.js';
import { useAuth } from '../components/AuthContext.js';
import global from '../styles/global.styles.js';


export default LoginScreen = () => {
    const authContext = useAuth();
    console.log(authContext);
    const { setIsLoggedIn } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        try {
            const isAuthenticated = true;
            if (isAuthenticated) {
                setIsLoggedIn(true);
            } else {
                Alert.alert("Login Failed", "Invalid credentials");
            }
        } catch (error) {
            Alert.alert("Login Error", "Unable to login");
            console.log(error);
        }
    };

    return (
        <ImageBackground
            source={background}
            style={styles.backgroundContainer}>
            <ScrollView style={global.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <TextInput
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Username" />
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        secureTextEntry />
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Sign In</Text>
                        <Icon name='keyboard-arrow-right' size={24} color={colors.white} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 64 }}></View>
            </ScrollView>
        </ImageBackground>
    );
};