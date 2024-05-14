import React, { createContext, useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import users from '../data/users.json';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('user');
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                    setIsLoggedIn(true);
                }
            } catch (error) {
                console.log(error);
            }
        };
        loadUser();
    }, []);

    const login = async (username, password) => {
        const authenticatedUser = users.find(
            user => user.username === username && user.password === password
        );

        if (authenticatedUser) {
            setIsLoggedIn(true);
            setUser(authenticatedUser);
            try {
                await AsyncStorage.setItem('user', JSON.stringify(authenticatedUser)); // Store user in AsyncStorage
            } catch (error) {
                console.log(error);
            }
        } else {
            Alert.alert("Login Failed", "Invalid credentials");
        }
    };

    const logout = async () => {
        setIsLoggedIn(false);
        setUser(null);
        try {
            await AsyncStorage.removeItem('user'); // Remove user from AsyncStorage
        } catch (error) {
            console.log(error);
        }
    };

    const value = {
        isLoggedIn,
        user,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);