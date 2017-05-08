import {StyleSheet, Dimensions}         from 'react-native';
import { FONT_FAMILY_STYLE }            from '../../assets/fonts/Font';

const { width, height } = Dimensions.get('window');
const realHeight = (h) => (height * h) / 736;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(14, 43, 77, .1)',
    },

    sub_container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
    },

    sub_container2: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
    },

    sub_container3: {
        flex: 1,
        marginLeft: 10,
    },

    shop_logo: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'rgba(14, 43, 77, .12)',
    },

    shop_name: {
        fontSize: 18,
        fontFamily: FONT_FAMILY_STYLE.medium,
        color: 'rgba(14, 43, 77, 255)',
    },

    shop_owner: {
        fontSize: 16,
        fontFamily: FONT_FAMILY_STYLE.medium,
        color: 'rgba(14, 43, 77, .65)',
    },
});