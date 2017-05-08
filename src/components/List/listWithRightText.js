import React from 'react'
import { ListView, View, TouchableHighlight, Text } from 'react-native'
import styles from './styles'

export default class ListWithRightText extends React.Component {

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
    onHandlePress: () => {}
  }

  static propTypes = {
    values: React.PropTypes.array.isRequired,
    selected: React.PropTypes.string,
    onHandlePress: React.PropTypes.func
  }

  renderField(value) {
    const { selected } = this.props
    return (
      <TouchableHighlight
        accessible={true}
        accessibilityLabel={`listViewRightTextItem-${value.sub_name}`}
        onPress={() => this.props.onHandlePress(value)}
        underlayColor='rgba(14, 43, 76, 0.1)'
        style={[styles.listField, { backgroundColor: (value.sub_name === selected) ? 'rgba(14, 43, 77, 0.03)' : '#ffffff' }]}>
        <View style={ styles.listFieldBody }>
          <Text style={[styles.listFieldText, { color: '#0e2b4d' }]}>{value.name}</Text>
          <Text style={[styles.listFieldText, { color: 'rgba(14, 43, 77, 0.65)' }]}>{value.sub_name}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.values}
          enableEmptySections={true}
          renderRow={rowData => this.renderField(rowData)}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.underline} />}
          showsVerticalScrollIndicator={false} />
      </View>
    )
  }
}
