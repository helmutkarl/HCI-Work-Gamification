import { StyleSheet } from 'react-native';
import colors from '../config/colors';



export default StyleSheet.create({

    tagContainer: {
        marginLeft: 13,
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'left',
        margin: 5,
    },

    tags: {
        margin: 5,
        paddingHorizontal: 18,
        paddingVertical: 5,
        borderRadius: 15,
        elevation: 5,
        shadowRadius: 12,
        overflow: "hidden",
        backgroundColor: colors.accent_green,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },

    tagsSelected: {
        margin: 5,
        paddingHorizontal: 18,
        paddingVertical: 5,
        borderRadius: 15,
        elevation: 5,
        shadowRadius: 12,
        overflow: "hidden",
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },

    tagsText: {
        color: colors.titles,
        fontSize: 14,
        fontFamily: 'OpenSans-Semibold'
    },

    tagsTextSelected: {
        color: colors.white,
        fontSize: 14,
        fontFamily: 'OpenSans-Bold'
    },
});