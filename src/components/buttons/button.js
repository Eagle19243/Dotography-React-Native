import React from 'react';
import { View, Text, TouchableHighlight, Platform } from 'react-native'
import assign from 'lodash/assign'
import { FONT_FAMILY_STYLE } from '../../assets/fonts/Font'

export default class Button extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      color: props.color,
    }
  }
  static propTypes = {
    title: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    borderWidth: React.PropTypes.number,
    borderColor: React.PropTypes.string,
    borderRadius: React.PropTypes.number,
    backgroundColor: React.PropTypes.string,
    backgroundColorPress: React.PropTypes.string,
    fontSize: React.PropTypes.number,
    fontWeight: React.PropTypes.string,
    color: React.PropTypes.string,
    colorPress: React.PropTypes.string,
    onHandlePress: React.PropTypes.func,
    accessibilityLabel: React.PropTypes.string
  }

  static defaultProps = {
    title: 'button',
    width: null,
    height: null,
    borderWidth: null,
    borderColor: '#000000',
    borderRadius: null,
    backgroundColor: '#ffffff',
    backgroundColorPress: '#ffffff',
    fontSize: null,
    fontWeight: null,
    color: '#000000',
    colorPress: '#000000',
    onHandlePress: () => {}
  }

  onHandlePressOn() {
    this.setState(assign({}, this.state, { color: this.props.colorPress }))
  }

  onHandlePressOff() {
    this.setState(assign({}, this.state, { color: this.props.color }))
  }

  render() {
    const color = this.state.color
    const { title, width, height, borderWidth, borderColor, borderRadius, backgroundColor,
            backgroundColorPress, fontSize, onHandlePress, accessibilityLabel } = this.props
    return (
      <View style={{ width, height, borderRadius, backgroundColor }}>
        <TouchableHighlight
          accessible={true}
          accessibilityLabel={accessibilityLabel}
          id='touchableHighlight'
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth, borderColor, borderRadius }}
          onPress={ onHandlePress }
          onShowUnderlay= { () => this.onHandlePressOn() }
          onHideUnderlay={ () => this.onHandlePressOff() }
          underlayColor={ backgroundColorPress }>
          <Text style={{ fontFamily: FONT_FAMILY_STYLE.medium, fontSize, color, paddingTop: Platform.OS === 'ios' ? 5 : 0 }}>
            { title }
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
