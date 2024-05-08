import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import CourseCatalogueScreen from './app/screens/CourseCatalogueScreen';
import LeaderboardScreen from './app/screens/LeaderboardScreen';
import RewardsScreen from './app/screens/RewardsScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import IntroScreen from './app/screens/IntroScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  const [firstStart, setFirstStart] = useState(null);

  useEffect(() => {
    checkFirstLaunch();
  }, []);

  const checkFirstLaunch = async () => {
    try {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      if (hasLaunched === null) {
        setFirstStart(true);
        await AsyncStorage.setItem('hasLaunched', 'true');
      } else {
        setFirstStart(false);
      }
    } catch (error) {
      console.error('Failed to check first launch', error);
    }
  };

  if (firstStart === null) {
    // don't render anything until we know if it's the first start
    return null;
  }

  if (firstStart) {
    return <IntroScreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Courses" component={CourseCatalogueScreen} options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={focused ? require('./app/assets/icons/menu_rocket_full.png') : require('./app/assets/icons/menu_rocket_empty.png')}
              style={{ width: size, height: size }}
            />
          ),
          headerShown: false,
        }} />
        <Tab.Screen name="Leaderboard" component={LeaderboardScreen} options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={focused ? require('./app/assets/icons/menu_trophy_full.png') : require('./app/assets/icons/menu_trophy_empty.png')}
              style={{ width: size, height: size }}
            />
          ),
          headerShown: false,
        }} />
        <Tab.Screen name="Rewards" component={RewardsScreen} options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={focused ? require('./app/assets/icons/menu_shield_full.png') : require('./app/assets/icons/menu_shield_empty.png')}
              style={{ width: size, height: size }}
            />
          ),
          headerShown: false,
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={focused ? require('./app/assets/icons/menu_user_full.png') : require('./app/assets/icons/menu_user_empty.png')}
              style={{ width: size, height: size }}
            />
          ),
          headerShown: false,
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}