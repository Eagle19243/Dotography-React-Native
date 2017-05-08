import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import MKTextField from '../../../node_modules/react-native-material-kit/lib/mdl/Textfield';
import { FONT_FAMILY_STYLE } from '../../assets/fonts/Font'
import { isEmpty } from '../../lib/utils/validation'
import styles from './inputStyle'
import arrowRight from '../../assets/images/chevron-right.png'

export default class InputSelector extends React.Component {

  static propTypes = {
    textLabel: React.PropTypes.string,
    isMandatory: React.PropTypes.bool,
    value: React.PropTypes.string,
    onHandlePress: React.PropTypes.func,
    onHandleFocus: React.PropTypes.func,
    autoFocus: React.PropTypes.bool,
    onHandleBlur: React.PropTypes.func,
    autoCapitalize: React.PropTypes.string,
    errorMessage: React.PropTypes.string,
    accessibilityLabel: React.PropTypes.string,
    accessibilityLabelErrorMessage: React.PropTypes.string
  }

  static defaultProps = {
    textLabel: 'Label',
    isMandatory: false,
    value: '',
    onHandlePress: () => {},
    onHandleFocus: () => {},
    autoFocus: false,
    onHandleBlur: () => {},
    autoCapitalize: 'none',
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
    const { textLabel, isMandatory, value, onHandlePress, onHandleFocus, autoFocus,
            onHandleBlur, autoCapitalize, errorMessage, accessibilityLabel } = this.props
    return (
      <View style={ styles.container }>
        <TouchableOpacity onPress={ () => onHandlePress() }>
          <MKTextField
            accessible={true}
            accessibilityLabel={accessibilityLabel}
            style={ styles.input }
            tintColor={!isEmpty(errorMessage) ? '#ff0000' : 'rgba(14, 43, 77, 0.1)'}
            underlineSize={1}
            placeholderTextColor={'rgba(14, 43, 77, 0.4)'}
            highlightColor={!isEmpty(errorMessage) ? '#ff0000' : '#489dff'}
            placeholder={textLabel.concat(isMandatory ? ' *' : '')}
            textInputStyle={styles.inputText}
            floatingLabelEnabled={true}
            floatingLabelAniDuration={300}
            floatingLabelBottomMargin={5}
            floatingLabelFont={{ fontFamily: FONT_FAMILY_STYLE.regular, fontSize: 14, color: 'rgba(14, 43, 77, 0.4)' }}
            value={value}
            autoCapitalize={autoCapitalize}
            onFocus={() => onHandleFocus()}
            autoFocus={autoFocus}
            onBlur={() => onHandleBlur()}
            editable={false} />
          <View style={ styles.inputRightIcon }>
            <Image style={{ width: 24, height: 24 }} source={arrowRight} />
          </View>
        </TouchableOpacity>
        { this.renderErrorMessage() }
      </View>
    )
  }
}
