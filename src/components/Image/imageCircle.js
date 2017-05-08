import React from 'react';
import { Image, View } from 'react-native';
import { isEmpty } from '../../lib/utils/validation'
import defaultIcon from '../../assets/images/rectangle-path.png'

export default class ImageCircle extends React.Component {

  static propTypes = {
    source: React.PropTypes.string,
    size: React.PropTypes.number,
    borderWidth: React.PropTypes.number,
    borderColor: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    defaultImage: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ]),
    defaultImageSize: React.PropTypes.number
  }

  static defaultProps = {
    source: '',
    size: null,
    borderWidth: null,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    defaultImage: defaultIcon,
    defaultImageSize: null
  }

  render() {
    const { size } = this.props
    const defaultImageSize = !isEmpty(this.props.defaultImageSize)
    ? this.props.defaultImageSize
    : Math.ceil(size / 2)
    return (
      !isEmpty(this.props.source) ? <Image
        style={{
          width: size,
          height: size,
          borderRadius: Math.ceil(size / 2),
          borderWidth: this.props.borderWidth,
          borderColor: this.props.borderColor
        }}
        source={{ uri: this.props.source }} />
      : <View style={{
        width: size,
        height: size,
        borderRadius: Math.ceil(size / 2),
        borderWidth: this.props.borderWidth,
        borderColor: this.props.borderColor,
        backgroundColor: this.props.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image
          style={{ width: defaultImageSize, height: defaultImageSize }}
          source={this.props.defaultImage} />
      </View>
    )
  }
}
