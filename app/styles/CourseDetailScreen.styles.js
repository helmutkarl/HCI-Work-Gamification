import { StyleSheet } from 'react-native';
import colors from '../config/colors';

export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
    },

    imageContainer: {
        marginTop: 60,
        paddingHorizontal: 10,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'center',
    },

    ctaContainer: {
        marginTop: 25,
        //backgroundColor: colors.primary,
        alignItems: 'center',
    },


    titleContainer: {
        paddingHorizontal: 10,
        //backgroundColor: colors.primary,
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
        color: colors.text,
        fontSize: 18,
        marginLeft: 8,
        marginTop: 8,
        fontWeight: '500',
    },
    descriptionText: {
        color: colors.text,
        fontSize: 16,
        marginLeft: 8,
        marginTop: 30,
        fontWeight: '500',
    },

    benefitsContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'left,'
    },

    benefitsTitle: {
        color: colors.text,
        fontSize: 18,
        marginLeft: 8,
        marginTop: 30,
        marginBottom: 10,
        fontWeight: '700',
    },

    benefitsText: {
        color: colors.text,
        fontSize: 16,
        marginLeft: 8,
        marginTop: 10,
        fontWeight: '500',
    },

    cta: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '900',
    },
});