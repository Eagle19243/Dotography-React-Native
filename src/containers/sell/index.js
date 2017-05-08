import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Actions } from 'react-native-router-flux'

class Sell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      button: 'Create shop now'
    }
  }
  handleClick() {
    Actions.createshop()
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'transparent' }}>
        <View style={styles.tutorial}>
        </View>
        <View style={styles.createshop}>
          <TouchableOpacity style={styles.button} onPress={() => this.handleClick()}>
            <Text style={styles.buttonText}>{this.state.button}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Sell
