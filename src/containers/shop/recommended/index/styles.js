import { StyleSheet, Dimensions }   from 'react-native'
import { FONT_FAMILY_STYLE }        from '../../../../assets/fonts/Font';

const { width, height } = Dimensions.get('window');
const realHeight = (h) => (height * h) / 736;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(218, 225, 231, 255)',
    },

    wrapper: {
        
    },

    slide: {
        flex: 1,
        backgroundColor: 'transparent'
    },

    image: {
        width,
        flex: 1
    },

    dot: {
        backgroundColor: 'rgba(255, 255, 255, .4)', 
        width: 8, 
        height: 8, 
        borderRadius: 4, 
        marginLeft: 6, 
        marginRight: 6,
    },

    active_dot: {
        backgroundColor: 'rgba(255, 255, 255, 255)', 
        width: 8, 
        height: 8, 
        borderRadius: 4, 
        marginLeft: 6, 
        marginRight: 6,
    },

    dot_container: {
        position: 'absolute',
        bottom: -28,
        left: (width - 155) / 2,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: 155,
        height: 50,
        borderRadius: 30,
    },

    pagination: {
        bottom: 5,
    },

    /*Products*/
    section_container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 255)',
        marginTop: 14,
    },

    section_header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width,
        height: 55,
    },

    section_title: {
        fontSize: 22,
        fontFamily: FONT_FAMILY_STYLE.medium,
        color: 'rgba(14, 43, 77, 255)',
        marginLeft: 15,
    },

    view_all_text: {
        fontSize: 18,
        fontFamily: FONT_FAMILY_STYLE.medium,
        color: 'rgba(14, 43, 77, .4)',
        marginRight: 15,
    },

    section_content: {
        marginBottom: 30,
    },
});
