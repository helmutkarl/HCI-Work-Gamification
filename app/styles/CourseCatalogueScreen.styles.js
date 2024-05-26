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
        flex: 1,
        height: 32,
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        paddingLeft: 4,
    },
    searchContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        margin: 18,
        backgroundColor: colors.white,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 5, //for Android
        shadowColor: colors.primary,
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4, //for iOS
    }
});
