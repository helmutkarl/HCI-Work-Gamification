import { StyleSheet } from 'react-native';
import colors from '../config/colors';

export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
    },

    profileImageContainer: {
        marginTop: 50,
        paddingHorizontal: 10,
        paddingVertical: 10,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'center',
    },
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tags: {
        margin: 5,
        paddingHorizontal: 18,
        paddingVertical: 7,
        borderRadius: 15,
        elevation: 5,
        shadowRadius: 12,
        overflow: "hidden",
        backgroundColor: '#f8f7d8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },

    titleContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'center',
    },

    courseContainer: {
        marginTop: 10,
        paddingBottom: 13,
        paddingHorizontal: 10,
        paddingVertical: 20,
        margin: 18,
        backgroundColor: '#f8fce7',
        flexDirection: 'row',
        alignItems: 'left',
        borderRadius: 12,
        elevation: 5,
        shadowRadius: 12,
    },

    statusTags: {
        marginTop: 80,
        marginLeft: 92,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 15,
        elevation: 5,
        shadowRadius: 12,
        overflow: "hidden",
        backgroundColor: '#EAF8BF',
        //flexDirection: 'row',
        alignItems: 'right',
        justifyContent: "right",
    },

    statusTagsText: {
        color: '#27476E',
        fontSize: 12,
        fontWeight: '500'
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

    courseCategory: {
        color: colors.secondary,
        fontSize: 14,
        marginLeft: 8,
        fontWeight: '700',
        marginBottom: 20,
    },

    courseTitle: {
        color: colors.titles,
        fontSize: 16,
        marginLeft: 8,
        fontWeight: '900',
        marginBottom: 5,
    },
    courseSubTitle: {
        color: colors.titles,
        fontSize: 14,
        marginLeft: 8,
        fontWeight: '500',
    },

    tagsText: {
        color: colors.secondary,
        fontSize: 16,
        fontWeight: '900'
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

    progressLine: {
        opacity: 0.3,
        height: 3,
        borderTopWidth: 3,
        borderColor: '#27476E',
        borderStyle: "solid",
        marginTop: 28,
        width: 230,
        marginLeft: 8,
        position: "absolute",
    },

    progressLineFull: {
        height: 3,
        borderTopWidth: 3,
        borderColor: '#27476E',
        borderStyle: "solid",
        marginTop: 28,
        width: 150,
        marginLeft: 8,
        position: "absolute",
    },
});