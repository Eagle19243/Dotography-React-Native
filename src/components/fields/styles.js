import { StyleSheet, Dimensions, Platform } from 'react-native'
import { FONT_FAMILY_STYLE } from '../../assets/fonts/Font'

const { width, height } = Dimensions.get('window');
const realHeight = h => (height * h) / 736

const styles = {}

export const textFieldStyle = StyleSheet.create({
  container: {
    height: 50,
    width: width - 30,
    marginLeft: 15
  },
  input: {
    width: width - 30,
    fontFamily: FONT_FAMILY_STYLE.regular,
    color: 'rgba(67, 87, 115, 1)',
    fontSize: 18
  },
  label: {
    fontFamily: FONT_FAMILY_STYLE.regular,
    color: 'rgba(67, 87, 115, 1)'
  },
  errorText: {
    marginLeft: 15,
    marginTop: realHeight(10),
    fontFamily: FONT_FAMILY_STYLE.regular,
    color: '#e02d37'
  }
})

export const passwordFieldStyle = StyleSheet.create({
  container: {
    height: 50,
    width: width - 30,
    marginLeft: 15
  },
  input: {
    width: width - 30,
    fontFamily: FONT_FAMILY_STYLE.light,
    color: 'rgba(67, 87, 115, 1)',
    fontSize: 18
  },
  label: {
    fontFamily: FONT_FAMILY_STYLE.light,
    color: 'rgba(67, 87, 115, 1)'
  },
  errorText: {
    marginLeft: 15,
    marginTop: realHeight(10),
    fontFamily: FONT_FAMILY_STYLE.regular,
    color: '#e02d37'
  }
})

if (Platform.OS === 'android') {
	styles = StyleSheet.create({
		container_form: {
			height: realHeight(160),
			justifyContent: 'flex-end'
		},
    container_form_pwd: {
      marginTop: 10,
			height: realHeight(107),
			justifyContent: 'flex-end',
		},
    wrapperEye: {
      position: 'absolute',
      top: 30,
      right: 20
    }
	})
} else {
	styles = StyleSheet.create({
		container_form: {
			height: realHeight(160),
			justifyContent: 'flex-end'
		},
    container_form_pwd: {
      marginTop: 10,
			height: realHeight(107),
			justifyContent: 'flex-end'
		},
    wrapperEye: {
			position: 'absolute',
			bottom: 35,
			right: 20
		}
	})
}

export default styles
