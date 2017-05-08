import { StyleSheet } from 'react-native'
import { FONT_FAMILY_STYLE } from '../../assets/fonts/Font'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45
  },
  inputExpand: {
    height: 70
  },
  inputText: {
    fontFamily: FONT_FAMILY_STYLE.regular,
    color: '#0e2b4d',
    fontSize: 18
  },
  inputTextExpand: {
    fontSize: 0,
    color: 'transparent'
  },
  inputRightIcon: {
    position: 'absolute',
    right: 0,
    bottom: 4,
    zIndex: 9999
  },
  inputRightIconExpand: {
    position: 'absolute',
    right: 0,
    bottom: 18,
    zIndex: 9999
  },
  containerError: {
    minHeight: 20,
    paddingTop: 5
  },
  containersErrorBody: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  errorText: {
    fontFamily: FONT_FAMILY_STYLE.regular,
    color: '#ff0000',
    fontSize: 14
  },
  containerCounter: {
    height: 22,
    justifyContent: 'flex-end'
  },
  containersCounterBody: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  counterText: {
    fontFamily: FONT_FAMILY_STYLE.regular,
    fontSize: 14,
    textAlign: 'right',
    color: 'rgba(0, 0, 0, 0.38)'
  }
})

module.exports = styles
