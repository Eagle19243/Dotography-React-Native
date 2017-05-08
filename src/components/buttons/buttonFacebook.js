import React from 'react'
import { View, Text, TouchableHighlight, Platform, Image } from 'react-native'
import Button from './button'
import { FONT_FAMILY_STYLE } from '../../assets/fonts/Font'
import loadIcon from '../../assets/images/facebook-icon.png'

export default class ButtonFacebook extends Button {

  renderIcon() {
    return (
      <View style={{
        zIndex: 999,
        width: 24,
        height: 24,
        left: 12
      }}>
        <Image style={{ width: 24, height: 24 }} source={loadIcon} />
      </View>
    )
  }

  render() {
    const color = this.state.color
    const { title, width, height, borderRadius, backgroundColor,
            backgroundColorPress, fontSize, fontWeight, onHandlePress,
            accessible, accessibilityLabel } = this.props
    return (
      <View style={{ width, height, borderRadius, backgroundColor }}>
        <TouchableHighlight
          accessible={accessible}
          accessibilityLabel={accessibilityLabel}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius }}
          onPress={ onHandlePress }
          onShowUnderlay= { () => this.onHandlePressOn() }
          onHideUnderlay={ () => this.onHandlePressOff() }
          underlayColor={ backgroundColorPress }>
          <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
            { this.renderIcon() }
            <Text style={{ flex: 1, textAlign: 'center', fontFamily: FONT_FAMILY_STYLE.medium, fontSize, fontWeight, color, paddingTop: Platform.OS === 'ios' ? 5 : 0 }}>
              { title }
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
