import React from 'react';
import AppNavigator from './app/components/Navigation.js';
import { AuthProvider } from './app/components/AuthContext.js';
import { MenuProvider } from 'react-native-popup-menu';
import { useFonts } from 'expo-font';



export default App = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    'Montserrat-Semibold': require('./assets/fonts/Montserrat/Montserrat-Semibold.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat/Montserrat-Light.ttf'),
    'OpenSans-Bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
    'OpenSans-Regular': require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
    'OpenSans-Semibold': require('./assets/fonts/Open_Sans/OpenSans-Semibold.ttf'),
    'OpenSans-Light': require('./assets/fonts/Open_Sans/OpenSans-Light.ttf'),
  });
  return (
    <AuthProvider>
      <MenuProvider>
        <AppNavigator />
      </MenuProvider>
    </AuthProvider>
  );
};
