import React from 'react'
import { View, Text, Platform, StyleSheet, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient';
import { Header, Title, Button } from 'native-base'
import { Font, FONT_FAMILY_STYLE } from '../../assets/fonts/Font'
import CloseIcon from '../../assets/images/Close.png'
import BackIcon from '../../assets/images/Back.png'
import { isEmpty } from '../../lib/utils/validation'

const styles = StyleSheet.create({
  headerWrapper: {
    height: Platform.OS === 'ios' ? 68 : 48,
    paddingHorizontal: 21.5,
    justifyContent: 'center',
  },
  headerTitle: {
    marginTop: Platform.OS === 'android' ? -10 : 0
  },
  buttonText: {
    fontFamily: FONT_FAMILY_STYLE.medium,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8
  }
})

export default class Headers extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    leftButton: React.PropTypes.string,
    leftAction: React.PropTypes.func,
    rightButton: React.PropTypes.string,
    rightAction: React.PropTypes.func,
    color: React.PropTypes.string,
    backgroundColor: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.string
    ]),
    headerStyle: React.PropTypes.object,
    accessibilityLabel: React.PropTypes.string,
  }

  static defaultProps = {
    title: '',
    leftButton: '',
    leftAction: () => Actions.pop(),
    rightButton: '',
    rightAction: () => Actions.pop(),
    color: '#ffffff',
    backgroundColor: ['#D70D52', '#E43A2C'],
  }

  renderButton(name, action) {
    if (!isEmpty(name)) {
      switch (name) {
        case 'close':
          return (
            <Button id='buttonClose' transparent onPress={action}>
              <View><Image style={{ width: 24, height: 24 }} source={CloseIcon} /></View>
            </Button>
          )
        case 'back':
          return (
            <Button id='buttonBack' transparent onPress={action}>
              <View><Image style={{ width: 24, height: 24 }} source={BackIcon} /></View>
            </Button>
          )
        default:
          return (
            <Button id='buttonDefault' key={name} transparent onPress={action}>
              <Text style={[styles.buttonText, { color: this.props.color }]}>{name}</Text>
            </Button>
          )
      }
    }
    return <View />
  }

  render() {
    const { leftButton, leftAction, rightButton, rightAction, backgroundColor,
           accessibilityLabel } = this.props
    return (
      Object.prototype.toString.call(backgroundColor) === '[object Array]'
      ? <View accessible={true} accessibilityLabel={accessibilityLabel}>
        <LinearGradient
          start={[0.0, 1.0]}
          end={[1.0, 1.0]}
          locations={[0, 1]}
          colors={backgroundColor}>
          <Header style={[styles.headerWrapper, { backgroundColor: 'transparent' }, this.props.headerStyle]}>
            { this.renderButton(leftButton, leftAction) }
            <Title style={[Font.headStyle, styles.headerTitle, { color: this.props.color }]}>
              {this.props.title}
            </Title>
            { this.renderButton(rightButton, rightAction) }
          </Header>
        </LinearGradient>
      </View>
      : <View accessible={true} accessibilityLabel={accessibilityLabel}>
        <Header id='headerWithColor' style={[styles.headerWrapper,
        { backgroundColor: this.props.backgroundColor }, this.props.headerStyle]}>
          { this.renderButton(leftButton, leftAction) }
          <Title style={[Font.headStyle, styles.headerTitle, { color: this.props.color }]}>
            {this.props.title}
          </Title>
          { this.renderButton(rightButton, rightAction) }
        </Header>
      </View>
    )
  }
}
