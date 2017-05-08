import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import I18n from 'react-native-i18n'
import NavigationDrawer from '../components/NavigationDrawer';
import Index from '../containers/index';
import language from '../language'

const SignupWord = I18n.t('Signup')

class Routers extends React.Component {
  render() {
    return (
      <Router hideNavBar={true} >
        <Scene key='root'>
          <Scene key='sideMenu' component={NavigationDrawer} open={false} duration={400} >
            <Scene key='main'>
              <Scene key="index" component={Index} initialTabs={'FEED'} panHandlers={null} />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default Routers;
