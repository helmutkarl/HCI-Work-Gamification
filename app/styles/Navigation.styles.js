import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    iconStyle: {
        width: 32,
        height: 32,
        marginTop: Platform.OS === 'ios' ? 24 : 0
    }
});