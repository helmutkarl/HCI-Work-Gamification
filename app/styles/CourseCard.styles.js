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
    courseType: {
        color: colors.secondary,
        fontSize: 14,
        marginLeft: 8,
        marginBottom: 13,
        fontFamily: 'OpenSans-Semibold'
    },
    courseTitle: {
        color: colors.titles,
        fontSize: 16,
        marginLeft: 8,
        marginBottom: 5,
        marginTop: 13,
        fontFamily: 'Montserrat-Semibold'
    },
    courseSubTitle: {
        color: colors.titles,
        fontSize: 14,
        left: 8,
        fontFamily: 'OpenSans-Light'
    },
    image: {
        height: 100,
        width: 100
    },

    progressLineContainer: {
        borderTopWidth: 3,
        marginTop: 28,
        width: 230,
        marginLeft: 8,
    },

    progressLine: {
        opacity: 0.3,
        height: 3,
        borderTopWidth: 3,
        borderColor: '#27476E',
        borderStyle: "solid",
        width: 230,
        marginLeft: 8,
        position: "absolute",
    },
    progressLineFull: {
        height: 3,
        borderTopWidth: 3,
        borderColor: '#27476E',
        borderStyle: "solid",
        width: 150,
        marginLeft: 8,
        position: "absolute",
    },
    statusTags: {
        marginTop: 2,
        marginLeft: 185,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 15,
        elevation: 5,
        shadowRadius: 12,
        overflow: "hidden",
        backgroundColor: '#EAF8BF',
        alignItems: 'right',
        justifyContent: "right",
        marginBottom: -10,
    },
    statusTagsText: {
        color: '#27476E',
        fontSize: 10,
        fontFamily: 'OpenSans-Semibold'
    },
});
