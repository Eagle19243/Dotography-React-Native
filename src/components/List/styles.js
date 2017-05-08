import { StyleSheet } from 'react-native'
import { FONT_FAMILY_STYLE } from '../../assets/fonts/Font'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listField: {
    height: 48,
    paddingHorizontal: 15,
    paddingTop: 15,
    backgroundColor: '#ffffff'
  },
  listFieldBody: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listFieldText: {
    fontFamily: FONT_FAMILY_STYLE.regular,
    fontSize: 18
  },
  customField: {
    height: 90,
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  customFieldBody: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  customFieldText: {
    fontFamily: FONT_FAMILY_STYLE.regular,
    fontSize: 18,
    fontWeight: '500',
    color: '#f94a49'
  },
  underline: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(14, 43, 77, 0.1)'
  }
})

module.exports = styles
