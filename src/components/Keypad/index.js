import React from 'react';
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native'
import { assign } from 'lodash'
import DeleteImg from '../../assets/images/delete@3x.png'
import styles from './styles'

class Keypad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      fadeAnim: new Animated.Value(0)
    }
  }
  static propTypes = {
    number: React.PropTypes.string,
    setNumberState: React.PropTypes.func
  }
  static defaultProps = {
    number: '',
    setNumberState: ''
  }
  componentDidMount() {
    Animated.timing(this.state.fadeAnim, { toValue: 1, duration: 5 }).start()
    Animated.spring(this.state.fadeAnim, { toValue: 1, friction: 10 }).start()
  }
  handleClick(number) {
    this.setState(assign(this.state, { number }))
    this.props.setNumberState(number)
  }
  handleDelete() {
    const number = ''
    this.setState(assign(this.state, { number: '' }))
    this.props.setNumberState(number)
  }


  render() {
    return (
      <Animated.View style={{
        height: 240,
        opacity: this.state.fadeAnim,
        transform: [{
          translateY: this.state.fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [100, 0]
          }),
        }],
      }} >
        <View style={styles.keypadContainer}>
          <View style={styles.keypadBox} >
            <TouchableOpacity
              accessible={true}
              accessibilityLabel={'one'}
              key={1}
              style={styles.keypad}
              onPress={() => this.handleClick('1')}>
              <Text style={styles.textKeypad}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel={'two'}
              key={2}
              style={styles.keypad}
              onPress={() => this.handleClick('2')}>
              <Text style={styles.textKeypad}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel={'three'}
              key={3}
              style={styles.keypad}
              onPress={() => this.handleClick('3')}>
              <Text style={styles.textKeypad}>3</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.keypadBox}>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel={'four'}
              key={4}
              style={styles.keypad}
              onPress={() => this.handleClick('4')}>
              <Text style={styles.textKeypad}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel={'five'}
              key={5}
              style={styles.keypad}
              onPress={() => this.handleClick('5')}>
              <Text style={styles.textKeypad}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel={'six'}
              key={6}
              style={styles.keypad}
              onPress={() => this.handleClick('6')}>
              <Text style={styles.textKeypad}>6</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.keypadBox}>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel={'seven'}
              key={7}
              style={styles.keypad}
              onPress={() => this.handleClick('7')}>
              <Text style={styles.textKeypad}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel={'eigth'}
              key={8}
              style={styles.keypad}
              onPress={() => this.handleClick('8')}>
              <Text style={styles.textKeypad}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel={'nine'}
              key={9}
              style={styles.keypad}
              onPress={() => this.handleClick('9')}>
              <Text style={styles.textKeypad}>9</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.keypadBox}>
            <View
              style={styles.keypadGray}>
              <Text></Text>
            </View>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel={'zero'}
              key={0}
              style={styles.keypad}
              onPress={() => this.handleClick(0)}>
              <Text style={styles.textKeypad}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keypadGray}
              onPress={() => this.handleDelete()}>
              <View><Image style={{ width: 24, height: 24 }} source={DeleteImg} /></View>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>

    )
  }
}

export default Keypad
