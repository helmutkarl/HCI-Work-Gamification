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
        fontWeight: '900'
    },
    subTitleText: {
        color: colors.titles,
        fontSize: 16,
        fontWeight: '500'
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
    }
});