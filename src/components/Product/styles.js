import { StyleSheet, Dimensions }   from 'react-native'
import { FONT_FAMILY_STYLE }        from '../../assets/fonts/Font';

const { width, height } = Dimensions.get('window');
const realHeight = (h) => (height * h) / 736;

export default StyleSheet.create({
    container: {
        flex: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(14, 43, 77, .1)',
    },

    sub_container1: {
        flex: 1,
        marginLeft: 15,
        marginTop: 15,
    },

    sub_container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
    },

    product_name: {
        fontSize: 16,
        fontFamily: FONT_FAMILY_STYLE.medium,
        color: 'rgba(14, 43, 77, 255)',
    },

    product_shop: {
        fontSize: 14, 
        fontFamily: FONT_FAMILY_STYLE.medium,
        color: 'rgba(14, 43, 77, .4)',
    },

    product_price: {
        fontSize: 16,
        fontFamily: FONT_FAMILY_STYLE.medium,
        color: 'rgba(14, 43, 77, .65)',
    },
    
    /*ButtonRemain*/
});