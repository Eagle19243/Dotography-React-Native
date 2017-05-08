import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Arrow from '../../assets/images/arrow-dropdown.png'
import styles from './styles'

export default class Dropdown extends React.Component {

  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    value: React.PropTypes.string,
    onHandlePress: React.PropTypes.func
  }

  static defaultProps = {
    width: null,
    height: null,
    value: '',
    onHandlePress: () => {}
  }

  render() {
    const { width, height, value, onHandlePress } = this.props
    return (
      <View id='dropdownContainer' style={{ width, height }}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.containerInLine} onPress={onHandlePress}>
            <Text style={styles.textLabel}>{value}</Text>
            <Image style={{ width: 24, height: 24 }} source={Arrow} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
