import React from 'react';
import AppNavigator from './app/components/Navigation.js';
import { AuthProvider } from './app/components/AuthContext.js';
import {MenuProvider} from 'react-native-popup-menu';



const App = () => {
  return (
    <AuthProvider>
      <MenuProvider>
        <AppNavigator />       
      </MenuProvider>
    </AuthProvider>
  );
};

export default App;