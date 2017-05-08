import React from 'react';

import {
  AppRegistry,
  View,
  StyleSheet,
  ListView,
  Text,
  Alert,
} from 'react-native';

class GridView extends React.Component {
    constructor(props) {
        super(props);

        this.groups = this.groupItems(this.props.items, this.props.itemsPerRow);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.renderGroup = this.renderGroup.bind(this);
    }

    groupItems(items, itemsPerRow) {

        var itemsGroups = [];
        var group = [];
        items.forEach(function(item) {
            if (group.length === itemsPerRow) {
                itemsGroups.push(group);
                group = [item];
            } else {
                group.push(item);
            }
        });

        if (group.length > 0) {
            itemsGroups.push(group);
        }

        return itemsGroups;
    }

    renderGroup(group) {
      var that = this;

      var items = group.map(function(item, index) {
            return that.props.renderItem(item, index);
      });

      return (
            <View style={styles.group}>
                {items}
            </View>
      );
    }

    render() {
        return (<ListView
            horizontal = {false}
            renderRow={this.renderGroup}
            dataSource={this.ds.cloneWithRows(this.groups)}
            keyboardDismissMode = 'on-drag'
            keyboardShouldPersistTaps = {true}
            onEndReached = {this.props.onEndReached}
            onEndReachedThreshold = {this.props.onEndReachedThreshold}
        />);
    }

    alertMessage() {
        Alert.alert(
              'Alert Title',
              'alertMessage',
              [
                  {text: 'OK', onPress: () => console.log('Ok Pressed!')},
              ]
        );
    }
};

var styles = StyleSheet.create({
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  }
});

export default GridView;






