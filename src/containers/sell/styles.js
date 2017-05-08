import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const realHeight = (h) => (height * h) / 736

export default StyleSheet.create({
  tutorial: {
    flex: 3,
    backgroundColor: '#D32B2E'
  },
  createshop: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    height: realHeight(50),
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D32B2E'
  },
  buttonText: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 20
  }
})
