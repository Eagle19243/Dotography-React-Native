import { StyleSheet, Dimensions }   from 'react-native'
import {FONT_FAMILY_STYLE}          from '../../assets/fonts/Font';

const { width, height } = Dimensions.get('window');
const realHeight = (h) => (height * h) / 736;

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    page: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    tab_bar: {
        width: width,
        backgroundColor: '#FFFFFFFF',
    },

    tab_indicator: {
        backgroundColor: '#51A1FFFF',
        margin: 13,
        width: width / 3 - 26,
    },

    tab_label: {
        marginLeft: 0, 
        marginRight: 0,
        color: 'rgba(14, 43, 77, .65)',
        fontSize: 16,
        fontFamily: FONT_FAMILY_STYLE.medium,
        textAlign: 'center',
    },
});