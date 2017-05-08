import { StyleSheet } from 'react-native'
import { FONT_FAMILY_STYLE } from '../../assets/fonts/Font'

export default StyleSheet.create({
  tab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(14, 43, 77, 0.12)',
    height: 44,
    backgroundColor: '#ffffff'
  },
  tabsIcon: {
    flex: 0,
    width: 40,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabText: {
    fontFamily: FONT_FAMILY_STYLE.BEBASNEUE,
    fontSize: 18,
    letterSpacing: 0.5,
    color: 'rgba(14, 43, 77, 0.8)'
  }
})
