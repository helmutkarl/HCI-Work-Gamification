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
        backgroundColor: colors.accent_green,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        
        
        shadowColor: colors.primary,
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4,

        // Elevation property for Android
        elevation: 5,
    
    },

    tagsSelected: {
        margin: 5,
        paddingHorizontal: 18,
        paddingVertical: 5,
        borderRadius: 15,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",

        shadowColor: colors.primary,
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4,

        // Elevation property for Android
        elevation: 5,
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