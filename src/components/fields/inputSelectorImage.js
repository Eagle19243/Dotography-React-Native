import React from 'react';
import { Image, Text, TouchableOpacity, View, ActivityIndicator, Dimensions } from 'react-native';
import { getSymbolFromCurrency } from 'currency-symbol-map'
import MKTextField from '../../../node_modules/react-native-material-kit/lib/mdl/Textfield';
import ImageCircle from '../../components/Image/imageCircle'
import { FONT_FAMILY_STYLE } from '../../assets/fonts/Font'
import { isEmpty } from '../../lib/utils/validation'
import styles from './inputStyle'
import arrowRight from '../../assets/images/chevron-right.png'
import shopIcon from '../../assets/images/shop-store.png'
import defaultIcon from '../../assets/images/rectangle-path.png'

const { width } = Dimensions.get('window');

export default class InputSelectorImage extends React.Component {

  static propTypes = {
    textLabel: React.PropTypes.string,
    isMandatory: React.PropTypes.bool,
    value: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.string
    ]),
    source: React.PropTypes.string,
    title: React.PropTypes.string,
    subTitle: React.PropTypes.string,
    onHandlePress: React.PropTypes.func,
    onHandleFocus: React.PropTypes.func,
    autoFocus: React.PropTypes.bool,
    onHandleBlur: React.PropTypes.func,
    autoCapitalize: React.PropTypes.string,
    errorMessage: React.PropTypes.string,
    loading: React.PropTypes.bool,
    accessibilityLabel: React.PropTypes.string,
    accessibilityLabelErrorMessage: React.PropTypes.string
  }

  static defaultProps = {
    textLabel: '',
    isMandatory: false,
    value: '',
    source: '',
    title: '',
    subTitle: '',
    onHandlePress: () => {},
    onHandleFocus: () => {},
    autoFocus: false,
    onHandleBlur: () => {},
    autoCapitalize: 'none',
    errorMessage: '',
    loading: false,
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
            onHandleBlur, autoCapitalize, errorMessage, loading, accessibilityLabel } = this.props
    return (
      <View style={ styles.container }>
        <TouchableOpacity onPress={() => onHandlePress()}>
          { !isEmpty(value) ? <View style={{ flex: 1, position: 'absolute', bottom: 4, flexDirection: 'row', zIndex: 999, alignItems: 'center' }}>
            <ImageCircle source={value.urlAvatar} size={42} backgroundColor='#eeeeee' borderWidth={1} borderColor='rgba(14, 43, 77, 0.12)' />
            <View style={{ paddingLeft: 10, justifyContent: 'center', width: (width - 128) }}>
              {
                !isEmpty(this.props.value.title)
                ? <Text style={{ fontFamily: FONT_FAMILY_STYLE.regular, fontSize: 18, color: '#0e2b4d' }}>{this.props.value.title}</Text>
                : null
              }
              {
                loading
                && isEmpty(this.props.value.title)
                && isEmpty(this.props.value.accounts.accountMoney)
                ? <ActivityIndicator style={{ width: 18, height: 18 }} color={loading ? 'black' : '#ffffff'} />
                : null
              }
              {
                !isEmpty(this.props.value.accounts.accountMoney)
                ? <Text style={{ fontFamily: FONT_FAMILY_STYLE.regular, fontSize: 14, color: 'rgba(14, 43, 77, 0.65)' }}>{`${getSymbolFromCurrency(this.props.value.accounts.currency)} ${this.props.value.accounts.accountMoney} available`}</Text>
                : null
              }
              {
                loading
                && !isEmpty(this.props.value.title)
                && isEmpty(this.props.value.accounts.accountMoney)
                ? <ActivityIndicator style={{ width: 14, height: 14 }} color={loading ? 'black' : '#ffffff'} />
                : null
              }
            </View>
          </View> : null }
          <MKTextField
            accessible={true}
            accessibilityLabel={accessibilityLabel}
            style={ !isEmpty(value) ? styles.inputExpand : styles.input }
            tintColor={!isEmpty(errorMessage) ? '#ff0000' : 'rgba(14, 43, 77, 0.1)'}
            underlineSize={1}
            placeholderTextColor={'rgba(14, 43, 77, 0.4)'}
            highlightColor={!isEmpty(errorMessage) ? '#ff0000' : '#489dff'}
            placeholder={textLabel.concat(isMandatory ? ' *' : '')}
            textInputStyle={!isEmpty(value) ? styles.inputTextExpand : styles.inputText}
            floatingLabelEnabled={true}
            floatingLabelAniDuration={300}
            floatingLabelBottomMargin={5}
            floatingLabelFont={{ fontFamily: FONT_FAMILY_STYLE.regular, fontSize: 14, color: 'rgba(14, 43, 77, 0.4)' }}
            value={!isEmpty(value) ? '-' : ''}
            autoCapitalize={autoCapitalize}
            onFocus={() => onHandleFocus()}
            autoFocus={autoFocus}
            onBlur={() => onHandleBlur()}
            editable={false} />
          <View style={ !isEmpty(value) ? styles.inputRightIconExpand : styles.inputRightIcon }>
            <Image style={{ width: 24, height: 24 }} source={arrowRight} />
          </View>
        </TouchableOpacity>
        { this.renderErrorMessage() }
      </View>
    )
  }
}
