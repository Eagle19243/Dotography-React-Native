import { StyleSheet, Platform } from 'react-native'
import { FONT_FAMILY_STYLE } from '../../assets/fonts/Font'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderColor: 'rgba(14, 43, 77, 0.1)'
  },
  containerInLine: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  textLabel: {
    fontFamily: FONT_FAMILY_STYLE.regular,
    fontSize: 18,
    color: 'rgba(14, 43, 77, 0.4)',
    marginTop: Platform.OS === 'ios' ? 5 : 0
  }
})

module.exports = styles
