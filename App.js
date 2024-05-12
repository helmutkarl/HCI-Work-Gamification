import React from 'react';
import AppNavigator from './app/components/Navigation.js';
import { AuthProvider } from './app/components/AuthContext.js';


const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;