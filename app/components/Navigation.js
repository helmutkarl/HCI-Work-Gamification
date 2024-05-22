import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';


import CourseCatalogueScreen from '../screens/CourseCatalogueScreen.js';
import CourseDetailScreen from '../screens/CourseDetailScreen.js';
import LeaderboardScreen from '../screens/LeaderboardScreen.js';
import RewardsScreen from '../screens/RewardsScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import IntroScreen from '../screens/IntroScreen.js';
import RewardDetailScreen from '../screens/RewardDetailScreen.js';
import { useAuth } from './AuthContext';
import styles from '../styles/Navigation.styles.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const RewardStack = createStackNavigator();
const CourseStack = createStackNavigator();


function MainNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabel: () => null,
            tabBarStyle: {
                backgroundColor: 'rgba(255, 255, 255, 0.65)',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                position: 'absolute',
                height: Platform.OS === 'ios' ? 72 : 64,
                elevation: 0,
            }
        }}>
            <Tab.Screen name="Courses" component={CourseStackNavigator} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? require('../assets/icons/menu_rocket_full.png') : require('../assets/icons/menu_rocket_empty.png')}
                        style={styles.iconStyle}
                    />
                ),
                headerShown: false,
            }} />
            <Tab.Screen name="Leaderboard" component={LeaderboardScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? require('../assets/icons/menu_trophy_full.png') : require('../assets/icons/menu_trophy_empty.png')}
                        style={styles.iconStyle}
                    />
                ),
                headerShown: false,
            }} />
            <Tab.Screen name="Rewards" component={RewardStackNavigator} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? require('../assets/icons/menu_shield_full.png') : require('../assets/icons/menu_shield_empty.png')}
                        style={styles.iconStyle}
                    />
                ),
                headerShown: false,
            }} />
            <Tab.Screen name="Profile" component={CourseStackNavigator2} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? require('../assets/icons/menu_user_full.png') : require('../assets/icons/menu_user_empty.png')}
                        style={styles.iconStyle}
                    />
                ),
                headerShown: false,
            }} />
        </Tab.Navigator>
    );
}

function AppNavigator() {
    const [firstStart, setFirstStart] = useState(null);
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        const checkFirstLaunch = async () => {
            const hasLaunched = await AsyncStorage.getItem('hasLaunched');
            if (hasLaunched === null) {
                await AsyncStorage.setItem('hasLaunched', 'true');
                setFirstStart(true);
            } else {
                setFirstStart(false);
            }
        };

        checkFirstLaunch();
    }, []);

    const handleDone = () => {
        setFirstStart(false);  // intro is done
    };

    if (firstStart === null) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {firstStart ? (
                    <Stack.Screen name="Intro">
                        {() => <IntroScreen onDone={handleDone} />}
                    </Stack.Screen>
                ) : isLoggedIn ? (
                    <Stack.Screen name="Main" component={MainNavigator} />
                ) : (
                    <Stack.Screen name="Login" component={LoginScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function CourseStackNavigator() {
    return (
        <CourseStack.Navigator>
            <CourseStack.Screen name="CourseCatalogueScreen" component={CourseCatalogueScreen} options={{ headerShown: false }} />
            <CourseStack.Screen
                name="CourseDetailScreen"
                component={CourseDetailScreen}
                options={({ navigation }) => ({
                    headerBackTitleVisible: false,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () => <CustomBackButton onPress={() => navigation.goBack()} />,
                })}
            />
        </CourseStack.Navigator>
    );
}

function CourseStackNavigator2() {
    return (
        <CourseStack.Navigator>
            <CourseStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
            <CourseStack.Screen
                name="CourseDetailScreen"
                component={CourseDetailScreen}
                options={({ navigation }) => ({
                    headerBackTitleVisible: false,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () => <CustomBackButton onPress={() => navigation.goBack()} />,
                })}
            />
        </CourseStack.Navigator>
    );
}

function RewardStackNavigator() {
    return (
        <RewardStack.Navigator>
            <RewardStack.Screen name="RewardsScreen" component={RewardsScreen} options={{ headerShown: false }} />
            <RewardStack.Screen
                name="RewardDetailScreen"
                component={RewardDetailScreen}
                options={({ navigation }) => ({
                    headerBackTitleVisible: false,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () => <CustomBackButton onPress={() => navigation.goBack()} />,
                })}
            />
        </RewardStack.Navigator>
    );
}

const CustomBackButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={require('../assets/icons/button_back.png')} style={{ width: 30, height: 30, marginTop: 20, marginLeft: 20 }} />
        </TouchableOpacity>
    );
};

export default AppNavigator;