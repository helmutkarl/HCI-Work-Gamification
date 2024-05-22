import { StyleSheet, Platform } from 'react-native';

export default commonStyles = StyleSheet.create({
    scrollView: {
        paddingBottom: Platform.OS === 'ios' ? 72 : 64
    }
});