import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { FONT_FAMILY_STYLE } from '../../assets/fonts/Font'
import { isEmail } from '../../lib/utils/validation'

const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  container: {
    backgroundColor: '#ffffff',
    minHeight: 158
  },
  wrapperContent: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingTop: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 14
  },
  header: {
    fontFamily: FONT_FAMILY_STYLE.regular,
    fontSize: 24,
    lineHeight: 22,
    color: '#0e2b4d',
    textAlign: 'left',
    paddingTop: 14,
    marginBottom: 9
  },
  content: {
    fontFamily: FONT_FAMILY_STYLE.regular,
    fontSize: 18,
    lineHeight: 22,
    color: '#0e2b4d',
  },
  textEmail: {
    fontFamily: FONT_FAMILY_STYLE.semibold,
    fontSize: 18,
    lineHeight: 22,
    color: '#0e2b4d',
    fontWeight: '600'
  },
  wrapperButton: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCenter: {
    minWidth: 52,
    height: 36,
    borderRadius: 2,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonLeft: {
    position: 'absolute',
    left: 10,
    marginTop: 8,
    minWidth: 52,
    height: 36,
    borderRadius: 2,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRight: {
    position: 'absolute',
    right: 10,
    marginTop: 8,
    minWidth: 52,
    height: 36,
    borderRadius: 2,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textbutton: {
    fontFamily: FONT_FAMILY_STYLE.medium,
    fontSize: 18,
    paddingTop: Platform.OS === 'ios' ? 5 : 0,
    paddingLeft: Platform.OS === 'ios' ? -3 : 0,
    textAlign: 'center',
    color: '#51a1ff'
  }
})

class PopupModal extends Component {
  static propTypes = {
    text: React.PropTypes.string,
    header: React.PropTypes.string,
    visible: React.PropTypes.bool,
    onButtonCenterClick: React.PropTypes.func,
    onButtonRightClick: React.PropTypes.func,
    onButtonLeftClick: React.PropTypes.func,
    buttonCenter: React.PropTypes.bool,
    buttonLeft: React.PropTypes.bool,
    buttonRight: React.PropTypes.bool,
    textButtonCenter: React.PropTypes.string,
    textButtonLeft: React.PropTypes.string,
    textButtonRight: React.PropTypes.string,
    buttonCenterStyle: React.PropTypes.object,
    buttonLeftStyle: React.PropTypes.object,
    buttonRightStyle: React.PropTypes.object,
    textButtonCenterStyle: React.PropTypes.object,
    textButtonLeftStyle: React.PropTypes.object,
    textButtonRightStyle: React.PropTypes.object,
    headerStyle: React.PropTypes.object,
    textStyle: React.PropTypes.object,
    wrapperContainer: React.PropTypes.object,
    container: React.PropTypes.object,
    wrapperContent: React.PropTypes.object,
    wrapperButton: React.PropTypes.object
  }

  static defaultProps = {
    textButtonLeft: 'OK',
    textButtonCenter: 'OK',
    textButtonRight: 'OK',
    visible: false,
    buttonCenter: false,
    buttonLeft: false,
    buttonRight: true,
    onButtonCenterClick: () => {},
    onButtonRightClick: () => {},
    onButtonLeftClick: () => {},
  }

  renderButtonLeft() {
    const { onButtonLeftClick, buttonLeftStyle, textButtonLeft, textButtonLeftStyle } = this.props
    return (
      <TouchableOpacity
        id='buttonLeft'
        style={[styles.buttonLeft, buttonLeftStyle]}
        onPress={() => { onButtonLeftClick() }}>
        <Text
          style={[styles.textbutton, textButtonLeftStyle]}> { textButtonLeft } </Text>
      </TouchableOpacity>
    )
  }

  renderButtonCenter() {
    const { onButtonCenterClick, buttonCenterStyle,
            textButtonCenter, textButtonCenterStyle } = this.props
    return (
      <TouchableOpacity
        id='buttonCenter'
        style={[styles.buttonCenter, buttonCenterStyle]}
        onPress={() => { onButtonCenterClick() }}>
        <Text
          style={[styles.textbutton, textButtonCenterStyle]}> { textButtonCenter } </Text>
      </TouchableOpacity>
    )
  }

  renderButtonRight() {
    const { onButtonRightClick, buttonRightStyle,
            textButtonRight, textButtonRightStyle } = this.props
    return (
      <TouchableOpacity
        id='buttonRight'
        style={[styles.buttonRight, buttonRightStyle]}
        onPress={() => { onButtonRightClick() }}>
        <Text style={[styles.textbutton, textButtonRightStyle]} > { textButtonRight }</Text>
      </TouchableOpacity>
    )
  }

  renderText(value, textStyle) {
    let temp = []
    if (value) {
      const tempValue = value.split(' ')
      temp = tempValue.map((res) => {
        if (/^#/.test(res) || isEmail(res)) {
          return <Text id='hasTag' key={res} style={styles.textEmail}>{ `${res.replace('#', '')} ` }</Text>;
        }
        return `${res} `;
      })
    } else {
      temp = value;
    }
    return (
      <Text id='textContent' style={[styles.content, textStyle]} >
        { temp }
      </Text>
    )
  }

  render() {
    const { buttonLeft, buttonCenter, buttonRight, visible,
            text, textStyle, header, headerStyle, wrapperContainer,
            container, wrapperContent, wrapperButton } = this.props
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={visible} >
        <View style={[styles.wrapperContainer, wrapperContainer]}>
          <View style={[styles.container, container]}>
            <View style={[styles.wrapperContent, wrapperContent]}>
              {
                header
                ? <Text id='textHeader' style={[styles.header, headerStyle]} >{ header }</Text>
                : null
              }
              { this.renderText(text, textStyle) }
            </View>
            <View style={[styles.wrapperButton, wrapperButton]}>
              { buttonLeft ? this.renderButtonLeft() : null }
              { buttonCenter ? this.renderButtonCenter() : null }
              { buttonRight ? this.renderButtonRight() : null }
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}
export default PopupModal;
