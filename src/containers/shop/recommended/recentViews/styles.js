import {StyleSheet, Dimensions}             from 'react-native';
import {FONT_FAMILY_STYLE}                  from '../../../../assets/fonts/Font';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 25,
    }
});