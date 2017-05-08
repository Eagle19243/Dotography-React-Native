'use strict'

import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import Routers from './routes'
import configureStore from './lib/configureStore'
import { setPlatform } from './reducers/device/deviceAction'

export default (platform) => {
  class Root extends React.Component {
    render() {
      const store = configureStore()
      store.dispatch(setPlatform(platform))
      return (
        <Provider store={store} >
          <Routers />
        </Provider>
      )
    }
  }
  AppRegistry.registerComponent('ReactNativeStarterKit', () => Root);
}
