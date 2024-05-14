import { StyleSheet } from 'react-native';
import colors from '../config/colors';


export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
    },

    container: {
        flex: 1,
        paddingHorizontal: 25,

    },

    titleContainer: {
        marginTop: 50,
        paddingHorizontal: 10,
        paddingVertical: 20,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'left',
    },

    titleText: {
        color: colors.titles,
        fontSize: 32,
        marginLeft: 8,
        fontWeight: '900',
        fontFamily: 'Montserrat-Semibold'
    },

    subTitleText: {
        color: colors.titles,
        fontSize: 16,
        marginLeft: 8,
        fontWeight: '500',
        fontFamily: 'OpenSans-Light'
    },
    contentContainer: {
        paddingBottom: 64,
    },
});
