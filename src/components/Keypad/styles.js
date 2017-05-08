import { StyleSheet } from 'react-native'
import { FONT_FAMILY_STYLE } from '../../assets/fonts/Font'

const styles = StyleSheet.create({
  keypadContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(14, 42, 77, 0.1)',
    flexWrap: 'wrap'
  },
  keypadBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 60
  },
  keypad: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
    height: 60,
  },
  keypadGray: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: '#cccccc',
    backgroundColor: '#cccccc',
    height: 60,
  },
  textKeypad: {
    fontSize: 28,
    color: '#0e2b4d',
    flexDirection: 'row',
    textAlign: 'center',
    fontFamily: FONT_FAMILY_STYLE.light,
    fontWeight: '400',
  }
})
export default styles
