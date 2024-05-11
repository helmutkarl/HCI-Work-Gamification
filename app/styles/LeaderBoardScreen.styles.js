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
        alignItems: 'left,'
    },

    titleText: {
        color: colors.titles,
        fontSize: 32,
        marginLeft: 8,
        fontWeight: '900'
    },

    subTitleText: {
        color: colors.titles,
        fontSize: 16,
        marginLeft: 8,
        fontWeight: '500'
    },


    leadersContainer: {
        marginTop: 30,
        margin: 18,
        backgroundColor: '#f8fce7',
        flexDirection: 'row',
        alignItems: 'left',
        borderRadius: 12,
        elevation: 5,
        shadowRadius: 12,
    },


    courseTextContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        margin: 18,
        backgroundColor: '#f8fce7',
        flexDirection: 'column',
        alignItems: 'left',
        borderRadius: 12,
        elevation: 5,
        shadowRadius: 12,
    },

    rankContainer: {
        color: colors.secondary,
        fontSize: 100,
        marginLeft: 300,
        marginTop: -64,
        fontWeight: '900',
        position: 'absolute'
    },

    xps: {
        color: colors.text,
        fontSize: 24,
        marginTop: 45,
        marginLeft: 12,
        fontWeight: '900',
        marginBottom: 5,
    },

    name: {
        color: colors.text,
        fontSize: 16,
        marginLeft: 12,
        fontWeight: '900',
        marginBottom: 5,
    },
    position: {
        color: colors.text,
        fontSize: 12,
        marginLeft: 12,
        marginTop: -5,
    },
});