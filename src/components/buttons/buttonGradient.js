import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'

class ButtonGradient extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    handleSubmit: React.PropTypes.func,
    accessibleID: React.PropTypes.bool,
    accessibilityLabelID: React.PropTypes.string
  }

  static defaultProps = {
    name: 'button',
    accessible: false
  }

  render() {
    const { name, handleSubmit, accessibleID, accessibilityLabelID } = this.props
    return (
      <LinearGradient
        start={[0.0, 1.0]}
        end={[1.0, 1.0]}
        locations={[0, 1]}
        colors={['#d70c52', '#e94d1c']}
        style={styles.gradient_button}
        >
        <TouchableOpacity
          accessible={accessibleID}
          accessibilityLabel={accessibilityLabelID}
          style={styles.button} onPress={ handleSubmit }>
          <Text style={styles.text}>{ name }</Text>
        </TouchableOpacity>
      </LinearGradient>
    )
  }
}

export default ButtonGradient
