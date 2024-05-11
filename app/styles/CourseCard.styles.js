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
});
