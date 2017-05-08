import React from 'react';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';
import { DefaultRenderer, Actions } from 'react-native-router-flux';
import Menu from './Menu'

class NavigationDrawer extends React.Component {
  static propTypes = {
    navigationState: React.PropTypes.object,
    username: React.PropTypes.string,
    logout: React.PropTypes.func
  }

  static defaultProps = {
    username: '',
    logout: () => {}
  }

  render() {
    const { username, logout } = this.props
    const state = this.props.navigationState;
    const children = state.children;
    const drawerStyles = {
      drawer: { zIndex: 99, shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
    }
    return (
      <Drawer
        ref="navigation"
        open={state.open}
        onOpen={() => Actions.refresh({ key: state.key, open: true })}
        onClose={() => Actions.refresh({ key: state.key, open: false })}
        type="displace"
        styles={drawerStyles}
        content={<Menu username={username} logout={logout} />}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan={true}
        tweenHandler={() => ({
          main: { opacity: 1 }
        })}>
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}

const mapStateToProps = state => ({
  username: 'Neville'
})

export default connect(mapStateToProps, undefined)(NavigationDrawer);
