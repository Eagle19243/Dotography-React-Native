import React from 'react';
import { Text, View } from 'react-native';
import MKTextField from '../../../node_modules/react-native-material-kit/lib/mdl/Textfield';
import { FONT_FAMILY_STYLE } from '../../assets/fonts/Font'
import { isEmpty } from '../../lib/utils/validation'
import styles from './inputStyle'

export default class InputTextField extends React.Component {

  static propTypes = {
    textLabel: React.PropTypes.string,
    isMandatory: React.PropTypes.bool,
    value: React.PropTypes.string,
    keyboardType: React.PropTypes.string,
    onChangeText: React.PropTypes.func,
    onHandleFocus: React.PropTypes.func,
    onHandleBlur: React.PropTypes.func,
    maxLength: React.PropTypes.number,
    floatingLabelEnabled: React.PropTypes.bool,
    editable: React.PropTypes.bool,
    errorMessage: React.PropTypes.string,
    accessibilityLabel: React.PropTypes.string,
    accessibilityLabelErrorMessage: React.PropTypes.string
  }

  static defaultProps = {
    textLabel: 'Label',
    isMandatory: false,
    value: '',
    keyboardType: 'default',
    onChangeText: () => {},
    onHandleFocus: () => {},
    onHandleBlur: () => {},
    maxLength: null,
    floatingLabelEnabled: true,
    editable: true,
    errorMessage: '',
    accessibilityLabel: null,
    accessibilityLabelErrorMessage: null
  }

  renderErrorMessage() {
    const { errorMessage, accessibilityLabelErrorMessage } = this.props
    return (
      !isEmpty(errorMessage) ?
        <View style={ styles.containerError }>
          <View style={ styles.containersErrorBody }>
            <Text
              accessible={true}
              accessibilityLabel={accessibilityLabelErrorMessage}
              style={ styles.errorText }>
              { errorMessage }
            </Text>
          </View>
        </View>
      : null
    )
  }

  render() {
    const { textLabel, isMandatory, value, keyboardType, onChangeText,
            onHandleFocus, onHandleBlur, maxLength, floatingLabelEnabled,
            editable, errorMessage, accessibilityLabel } = this.props
    return (
      <View style={ styles.container }>
        <MKTextField
          accessible={true}
          accessibilityLabel={accessibilityLabel}
          style={ styles.input }
          tintColor={ !isEmpty(errorMessage) ? '#ff0000' : 'rgba(14, 43, 77, 0.1)' }
          underlineSize={ 1 }
          placeholderTextColor={ 'rgba(14, 43, 77, 0.4)' }
          highlightColor={ !isEmpty(errorMessage) ? '#ff0000' : '#489dff' }
          placeholder={ textLabel.concat(isMandatory ? ' *' : '') }
          textInputStyle={ styles.inputText }
          floatingLabelEnabled={ floatingLabelEnabled }
          floatingLabelAniDuration={ 300 }
          floatingLabelBottomMargin={ 5 }
          floatingLabelFont={{ fontFamily: FONT_FAMILY_STYLE.regular, fontSize: 14, color: 'rgba(14, 43, 77, 0.4)' }}
          value = { value }
          autoCapitalize= "none"
          keyboardType = { keyboardType }
          onChangeText={ text => onChangeText(text) }
          onFocus= { () => onHandleFocus() }
          onBlur= { () => onHandleBlur() }
          editable = { editable }
          maxLength = { maxLength } />
        { this.renderErrorMessage() }
      </View>
    )
  }
}
