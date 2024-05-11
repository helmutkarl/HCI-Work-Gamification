import { StyleSheet } from 'react-native';
import colors from '../config/colors';

export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    container: {
        padding: '10%',
    },
    icon: {
        width: 164,
        height: 164,
        textAlign: 'center',
    },
    text: {
        color: 'white',
        fontSize: 32,
        color: colors.titles,
    },
    activeDotStyle: {
        backgroundColor: colors.primary,
        width: 20,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 3,
    },
    buttonImage: {
        height: 64,
        width: 64,
        position: 'relative',
        bottom: 16,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    }
});
