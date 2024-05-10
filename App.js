import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import CourseCatalogueScreen from './app/screens/CourseCatalogueScreen';
import LeaderboardScreen from './app/screens/LeaderboardScreen';
import RewardsScreen from './app/screens/RewardsScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import IntroScreen from './app/screens/IntroScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator>
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
  );
}

function AppNavigator() {
  const [firstStart, setFirstStart] = useState(null);

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
        ) : (
          <Stack.Screen name="Main" component={MainNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
