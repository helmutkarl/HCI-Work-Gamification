import { StyleSheet } from 'react-native';
import colors from '../config/colors';

export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        marginTop: 50,
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10
    },
    titleText: {
        color: colors.titles,
        fontSize: 32,
        fontFamily: 'Montserrat-Semibold'
    },
    subTitleText: {
        color: colors.titles,
        fontSize: 16,
        fontFamily: 'OpenSans-Light'
    },
    textInput: {
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        margin: 18,
        backgroundColor: colors.white,
        borderRadius: 12,
        elevation: 5,
        shadowRadius: 12,
        fontFamily: 'OpenSans-Regular'
    },
});
