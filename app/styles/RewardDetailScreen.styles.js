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
        position: 'relative',
    },

    titleContainer: {
        paddingHorizontal: 10,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'left,'
    },

    tagContainer: {
        marginLeft: 13,
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'left',
    },

    tags: {
        margin: 5,
        paddingHorizontal: 18,
        paddingVertical: 5,
        borderRadius: 15,
        elevation: 5,
        shadowRadius: 12,
        overflow: "hidden",
        backgroundColor: '#f8f7d8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },

    tagsText: {
        color: colors.secondary,
        fontSize: 14,
        fontFamily: 'OpenSans-Semibold'
    },

    titleText: {
        color: colors.titles,
        fontSize: 32,
        marginLeft: 8,
        fontFamily: 'Montserrat-Semibold'
    },

    subTitleText: {
        color: colors.text,
        fontSize: 18,
        marginLeft: 8,
        marginTop: 8,
        fontFamily: 'OpenSans-Light'
    },

    descriptionText: {
        color: colors.text,
        fontSize: 16,
        marginLeft: 8,
        marginTop: 30,
        fontFamily: 'OpenSans-Regular'
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
        fontFamily: 'OpenSans-Bold'
    },

    benefitsText: {
        color: colors.text,
        fontSize: 16,
        marginLeft: 8,
        marginTop: 10,
        fontFamily: 'OpenSans-Semibold'
    },

    ctaText: {
        color: colors.white,
        fontSize: 16,
        textAlign: 'center',
        position: 'absolute',
        top: '36%',
        fontFamily: 'Montserrat-Semibold'
    },
});
