import { StyleSheet } from 'react-native'

const FONT_FAMILY = 'URW Geometric Cond'
const FONT_FAMILY_STYLE = {
  medium: 'URWGeometricCond-Medium',
  light: 'URWGeometricCond-Light',
  semibold: 'URWGeometricCond-SemiBold',
  medium_oblique: 'URWGeometricCond-MediumOblique',
  bold: 'URWGeometricCond-Bold',
  bold_oblique: 'URWGeometricCond-BoldOblique',
  semi_bold_oblique: 'URWGeometricCond-SemiBoldOblique',
  regular_oblique: 'URWGeometricCond-RegularOblique',
  light_oblique: 'URWGeometricCond-LightOblique',
  regular: 'URW Geometric Cond',
  BEBASNEUE: 'BebasNeue'
}
const BOLD = '700'
const SEMI_BOLD = '600'
const MEDIUM = '500'
const LIGHT = '400'

const styles = StyleSheet.create({
  headStyle: {
    fontFamily: 'BebasNeue',
    fontSize: 20,
    color: '#ffffff',
    letterSpacing: 1,
    paddingTop: 8
  }
})

module.exports = {
  Font: styles,
  FONT_FAMILY,
  FONT_FAMILY_STYLE,
  BOLD,
  SEMI_BOLD,
  MEDIUM,
  LIGHT
}
