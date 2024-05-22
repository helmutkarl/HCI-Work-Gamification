import { StyleSheet } from 'react-native';
import colors from '../config/colors';


export default StyleSheet.create({
    chartContainerAll: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: -18,
    },
    chartContainer: {
        alignItems: 'center',
        justifyContent: "center",
        paddingHorizontal: 6,
    },
    chartNumber: {
        color: colors.titles,
        fontSize: 30,
        textAlign: 'center',
        position: 'absolute',
        alignSelf: 'center',
        top: '25%',
        fontFamily: 'Montserrat-Semibold'
    },
    chartText: {
        color: colors.titles,
        fontSize: 12,
        textAlign: 'center',
        position: 'absolute',
        top: '55%',
        fontFamily: 'Montserrat-Regular'
    },
});
