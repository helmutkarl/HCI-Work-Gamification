import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, ImageBackground, TextInput, Alert, Image } from 'react-native';

import colors from '../config/colors.js';
import background from '../assets/images/background.png';
import styles from '../styles/LoginScreen.styles.js';
import { useAuth } from '../components/AuthContext.js';
import global from '../styles/global.styles.js';


export default LoginScreen = ({ navigation }) => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        login(username, password);
    };

    return (
        <ImageBackground
            source={background}
            style={styles.backgroundContainer}>
            <ScrollView style={global.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Get Started!</Text>
                    <Text style={styles.subTitleText}>Please Sign in with your Work Account</Text>
                </View>
                <View>
                    <TextInput
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Email"
                        style={styles.textInput} />
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        secureTextEntry
                        style={styles.textInput} />
                </View>
                <TouchableOpacity style={styles.ctaContainer} onPress={handleLogin}>
                    <Image source={require('../assets/icons/cta_button.png')} style={{ width: 350, }} resizeMode='contain' />
                    <Text style={styles.ctaText}>Sign In</Text>
                </TouchableOpacity>

                <View style={{ height: 64 }}></View>
            </ScrollView>
        </ImageBackground>
    );
};
