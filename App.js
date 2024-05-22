import React from 'react';
import * as Font from 'expo-font';
import { MenuProvider } from 'react-native-popup-menu';

import AppNavigator from './app/components/Navigation.js';
import { AuthProvider } from './app/components/AuthContext.js';

let customFonts = {
  'Montserrat-Bold': require('./app/assets/fonts/Montserrat/Montserrat-Bold.ttf'),
  'Montserrat-Regular': require('./app/assets/fonts/Montserrat/Montserrat-Regular.ttf'),
  'Montserrat-Semibold': require('./app/assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
  'Montserrat-Light': require('./app/assets/fonts/Montserrat/Montserrat-Light.ttf'),
  'OpenSans-Bold': require('./app/assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
  'OpenSans-Regular': require('./app/assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
  'OpenSans-Semibold': require('./app/assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),
  'OpenSans-Light': require('./app/assets/fonts/Open_Sans/OpenSans-Light.ttf'),
};



export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <AuthProvider>
        <MenuProvider>
          <AppNavigator />
        </MenuProvider>
      </AuthProvider>
    );
  }
}
