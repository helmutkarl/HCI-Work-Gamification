import { StyleSheet } from 'react-native';
import colors from '../config/colors.js';

export default StyleSheet.create({
    courseContainer: {
        marginTop: 10,
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
        left: 8,
        fontWeight: '500',
    },
    image: {
        height: 100,
        width: 100
    },
    tagsText: {
        color: colors.secondary,
        fontSize: 16,
        fontWeight: '900'
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
});
