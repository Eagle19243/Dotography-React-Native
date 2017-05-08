'use strict'

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <View>
        <Text>
          Hello From App {this.props.platform}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { platform: state.device.platform }
}

export default connect(mapStateToProps)(App)
