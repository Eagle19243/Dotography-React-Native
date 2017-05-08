import { StyleSheet } from 'react-native'
import { FONT_FAMILY_STYLE, FONT_FAMILY } from '../../assets/fonts/Font';

export default StyleSheet.create({
  container: {
    backgroundColor: '#0e2b4d',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: FONT_FAMILY_STYLE.bold
  },
  headerText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: FONT_FAMILY
  },
  header: {
    height: 99,
    backgroundColor: '#0e2b4d',
    borderBottomWidth: 2,
    borderBottomColor:'#154073'
  },
  wrapperHeader: {
    flex: 1,
    flexDirection: 'row'
  },
  wrapperImageProfile: {
    width: 60
  },
  wrapperDetailProfile: {
    flex: 1,
  },
  list: {
    marginLeft: 0,
    paddingLeft: 15,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#154073'
  },
  iconEditProfile: {
    fontSize: 15,
    color: '#68798c',
  },
  iconEditProfileWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 15,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: '#68798c',
    borderLeftColor: '#68798c',
    borderRightColor: '#68798c',
    borderBottomColor: '#68798c',
  }
})
