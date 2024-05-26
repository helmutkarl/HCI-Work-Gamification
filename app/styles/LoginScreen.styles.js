import { StyleSheet } from 'react-native';
import colors from '../config/colors';

export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
    },

    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        marginTop: 200,
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
        fontFamily: 'OpenSans-Semibold',
        shadowColor: colors.primary,
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 0,
        paddingTop: 64
    },

    ctaContainer: {
        marginTop: 25,
        alignItems: 'center',
        position: 'relative',
    },

    button: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        margin: 8,
        backgroundColor: colors.primary,
        flexDirection: 'row'
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        marginLeft: 8,
    },

    ctaText: {
        color: colors.white,
        fontSize: 16,
        textAlign: 'center',
        position: 'absolute',
        top: '36%',
        fontFamily: 'Montserrat-Semibold'
    }
});
