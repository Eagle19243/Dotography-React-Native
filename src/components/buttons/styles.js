import { StyleSheet, Dimensions, Platform } from 'react-native'
import { FONT_FAMILY_STYLE } from '../../assets/fonts/Font'

const { height } = Dimensions.get('window')
const realHeight = h => (height * h) / 736

const styles = StyleSheet.create({
  gradient_button: {
    borderRadius: 3,
    height: realHeight(50),
    marginLeft: 15,
    marginRight: 15
  },
  button: {
    height: realHeight(50),
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: FONT_FAMILY_STYLE.bold,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? realHeight(9) : 0
  }
})
export default styles
