import { StyleSheet } from 'react-native'
import { FONT_FAMILY_STYLE } from '../../assets/fonts/Font'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45
  },
  inputText: {
    fontFamily: 'URW Geometric Cond',
    color: '#0e2b4d',
    fontSize: 18
  },
  inputRightIcon: {
    position: 'absolute',
    right: 0,
    top: 18,
    zIndex: 99
  },
  containerError: {
    flex: 1,
    height: 20,
  },
  containersErrorBody: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  errorText: {
    marginTop: 2,
    fontFamily: FONT_FAMILY_STYLE.regular,
    color: '#ff0000',
    fontSize: 14
  },
  wrapperEye: {
    position: 'absolute',
    right: 0,
    top: 17
  }
})

module.exports = styles
