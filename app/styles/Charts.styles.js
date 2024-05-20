import { StyleSheet } from 'react-native';
import colors from '../config/colors';


export default StyleSheet.create({
chartContainerAll: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: -20,
},

chartContainer: {
    alignItems: 'center',
    justifyContent: "center",
    paddingHorizontal: 5,
},

chartNumber: {
    color: colors.titles,
    fontSize: 30,
    textAlign: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: '30%',
    fontFamily: 'Montserrat-Semibold'
},

chartText: {
    color: colors.titles,
    fontSize: 12,
    textAlign: 'center',
    position: 'absolute',
    top: '60%',
    fontFamily: 'Montserrat-Regular'
},
});
