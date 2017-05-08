import React from 'react'
import { Text, View, Platform } from 'react-native'
import assign from 'lodash/assign'
import MKTextField from '../../../node_modules/react-native-material-kit/lib/mdl/Textfield';
import { FONT_FAMILY_STYLE } from '../../assets/fonts/Font'
import { isEmpty } from '../../lib/utils/validation'
import styles from './inputStyle'

export default class InputTextArea extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      height: Platform.OS === 'ios' ? 45 : 51,
      contentHeight: 45,
      showCounter: false
    }
  }

  static propTypes = {
    textLabel: React.PropTypes.string,
    isMandatory: React.PropTypes.bool,
    value: React.PropTypes.string,
    keyboardType: React.PropTypes.string,
    onChangeText: React.PropTypes.func,
    onHandleFocus: React.PropTypes.func,
    autoFocus: React.PropTypes.bool,
    onHandleBlur: React.PropTypes.func,
    maxLength: React.PropTypes.number,
    floatingLabelEnabled: React.PropTypes.bool,
    autoCapitalize: React.PropTypes.string,
    editable: React.PropTypes.bool,
    errorMessage: React.PropTypes.string,
    counter: React.PropTypes.bool,
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
    autoFocus: false,
    onHandleBlur: () => {},
    maxLength: null,
    floatingLabelEnabled: true,
    autoCapitalize: 'none',
    editable: true,
    errorMessage: '',
    counter: false,
    accessibilityLabel: null,
    accessibilityLabelErrorMessage: null
  }

  onHandleSizeChange(event) {
    const { height, contentHeight } = this.state
    const inputTextHeight = 20.5
    const calHeight = (Platform.OS === 'ios' ? 45 : 51)
    const currentHeight = event.nativeEvent.contentSize.height
    if (currentHeight > contentHeight) {
      this.setState(assign({}, this.state, {
        height: currentHeight + inputTextHeight,
        contentHeight: currentHeight
      }))
    } else {
      this.setState(assign({}, this.state, {
        height: currentHeight - inputTextHeight < calHeight
                ? calHeight : currentHeight - inputTextHeight,
        contentHeight: currentHeight
      }))
    }
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

  renderCounterMessage() {
    const { counter, value, maxLength } = this.props
    return (
      counter ? <View style={styles.containerCounter}>
        <View style={styles.containersCounterBody}>
          <Text style={styles.counterText}>
            { value.length } / {maxLength}
          </Text>
        </View>
      </View>
      : null
    )
  }

  render() {
    const { height } = this.state
    const { textLabel, isMandatory, value, keyboardType, onChangeText,
            onHandleFocus, autoFocus, onHandleBlur, maxLength, floatingLabelEnabled,
            autoCapitalize, editable, errorMessage, accessibilityLabel } = this.props
    return (
      <View style={ styles.container }>
        <MKTextField
          accessible={true}
          accessibilityLabel={accessibilityLabel}
          ref='MKTextArea'
          style={{ height }}
          tintColor={!isEmpty(errorMessage) ? '#ff0000' : 'rgba(14, 43, 77, 0.1)'}
          underlineSize={1}
          placeholderTextColor={'rgba(14, 43, 77, 0.4)'}
          highlightColor={!isEmpty(errorMessage) ? '#ff0000' : '#489dff'}
          placeholder={textLabel.concat(isMandatory ? ' *' : '')}
          textInputStyle={styles.inputText}
          floatingLabelEnabled={floatingLabelEnabled}
          floatingLabelAniDuration={300}
          floatingLabelBottomMargin={5}
          floatingLabelFont={{ fontFamily: FONT_FAMILY_STYLE.regular, fontSize: 14, color: 'rgba(14, 43, 77, 0.4)' }}
          value={value}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          onChangeText={text => onChangeText(text)}
          onContentSizeChange={event => this.onHandleSizeChange(event)}
          onFocus={() => {
            onHandleFocus()
            this.setState(assign({}, this.state, { showCounter: true }))
          }}
          autoFocus={autoFocus}
          onBlur={() => {
            onHandleBlur()
            this.setState(assign({}, this.state, { showCounter: false }))
          }}
          maxLength={maxLength}
          editable={editable}
          multiline={true} />
        { this.renderErrorMessage() }
        { this.state.showCounter ? this.renderCounterMessage() : null }
      </View>
    )
  }
}
