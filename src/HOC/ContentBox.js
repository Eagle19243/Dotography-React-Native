import React from 'react'
import { View, Animated, StyleSheet, Dimensions } from 'react-native'

/**
 * ContentLoading
 * Recieve percent number for calculate to width of Component
 * @param {[number]} type
 * @param {[number]} height             [set height of component]
 * @param {[number]} marginTop          [set marginTop of component]
 * @param {[number]} marginBottom       [set marginBottom of component]
 * @param {[number]} marginLeft         [set marginLeft of component]
 * @param {[number]} marginRight        [set marginRight of component]
 * @return {[Component]}
 */

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  static: {
    zIndex: 1,
    // position: 'absolute',
    // width: width - 30,
    backgroundColor: 'rgba(14, 43, 77, 0.1)'
  },
  animate: {
    zIndex: 100,
    position: 'absolute',
    width: width - 30,
    backgroundColor: 'rgba(14, 43, 77, 0.05)'
  },
  space: {
    backgroundColor: '#FFFFFF',
    zIndex: 1000,
    // position: 'absolute',
    // width: width - 30,
  }
})

class ContentLoading extends React.Component {
  static propTypes = {
    type: React.PropTypes.number,
    height: React.PropTypes.number,
    marginTop: React.PropTypes.number,
    marginBottom: React.PropTypes.number,
    marginLeft: React.PropTypes.number,
    marginRight: React.PropTypes.number,
  }

  static defaultProps = {
    type: 100,
    height: 10,
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
  }

  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(-150),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.state.bounceValue.setValue(-150)
      Animated.timing(                          // Base: spring, decay, timing
        this.state.bounceValue, {
          toValue: 370,                         // Animate to smaller size
          duration: 1000,                          // Bouncier spring
        }
      ).start()
    }, 1000);
  }

  render() {
    const { marginTop, marginBottom, marginLeft, marginRight, type, height } = this.props
    return (
      <View
        style={[
          styles.container, {
            marginTop,
            marginBottom,
            marginLeft,
            marginRight,
            flex: 1
          }
        ]}>
        <View style={{ flex: type }}>
          <View style={[styles.static, { flex: type, height }]} />
          {/* <Animated.View
            style={[styles.animate, {
              transform: [                        // `transform` is an ordered array
                { translateX: this.state.bounceValue },  // Map `bounceValue` to `scale`
              ],
              height,
            }]}>
          </Animated.View> */}
        </View>
        <View style={[styles.space, { flex: 100 - type, height }]} />
      </View>

    )
  }
}

export default ContentLoading
