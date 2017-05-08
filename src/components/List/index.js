import React from 'react'
import { ListView, View, TouchableHighlight, TouchableOpacity, Text, Image } from 'react-native'
import Mark from '../../assets/images/check-mark.png'
import styles from './styles'

export default class List extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      values: this.buildListDataSource(props.values)
    }
  }

  buildListDataSource(list) {
    return this.ds.cloneWithRows(list)
  }

  static defaultProps = {
    values: [],
    selected: '',
    hasFooter: false,
    footerText: 'Not found on this list',
    onHandlePress: () => {}
  }

  static propTypes = {
    values: React.PropTypes.array.isRequired,
    selected: React.PropTypes.string.isRequired,
    hasFooter: React.PropTypes.bool,
    footerText: React.PropTypes.string,
    onHandlePress: React.PropTypes.func
  }

  renderField(value, key) {
    return (
      <TouchableHighlight
        accessible={true}
        accessibilityLabel={key}
        onPress={() => this.props.onHandlePress(value)}
        underlayColor='rgba(14, 43, 77, 0.03)'
        style={styles.listField}>
        <View style={styles.listFieldBody}>
          <Text style={(value.name === this.props.selected) ? { fontWeight: '600' } : null}>{value.name}</Text>
          { (value.name === this.props.selected)
            ? <Image style={{ width: 24, height: 24 }} source={Mark} />
            : null }
        </View>
      </TouchableHighlight>
    )
  }

  renderFooterField() {
    const { hasFooter, footerText } = this.props
    return (
      hasFooter
      ? <View style={styles.customField}>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel={'notFoundOnListView'}
          style={styles.customFieldBody}
          onPress={() => this.props.onHandlePress('not found')} >
          <Text style={styles.customFieldText}>{footerText}</Text>
        </TouchableOpacity>
      </View>
      : null
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.values}
          enableEmptySections={true}
          renderRow={(rowData, sectionID, rowID) => this.renderField(rowData, `listViewItem${rowID}`)}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.underline} />}
          renderFooter={() => this.renderFooterField()}
          showsVerticalScrollIndicator={false} />
      </View>
    )
  }
}
