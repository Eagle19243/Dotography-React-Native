import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Platform, Image } from 'react-native';
import { Header, Title, Button, Content } from 'native-base'
import SearchBar                          from '../components/SearchBar/SearchBar';
import LinearGradient from 'react-native-linear-gradient';
import { assign } from 'lodash';

import { Font } from '../assets/fonts/Font';
import Shop from './shop';
import Sell from './sell';
import Footer from '../components/Footer'
import {assets}         from '../lib/constants/assets';

let margintTitleAndroid = {}
if (Platform.OS === 'android') {
  margintTitleAndroid = { marginTop: -10 }
} else {
  margintTitleAndroid = {}
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: this.props.initialTabs,
      headerIndex: 0,
    }
  }

  static defaultProps = {
    initialTabs: 'FEED', // bottom tabs
    indexTab: 0,         // tab on top in shop view
    shopname: ''
  }

  static propTypes = {
    indexTab: React.PropTypes.number,

  }

  _getTabsState(value) {
    this.setState(assign({}, this.state, { tabs: value }))
  }

  renderContent() {
    const { indexTab } = this.props

    switch (this.state.tabs) {
      case 'SHOP':
        return <Shop indexTab={indexTab} parent = {this}/>
      case 'SELL':
        return <Sell indexTab={indexTab} />
      default:
        return <Content><Text> Page : { this.state.tabs } </Text></Content>
    }
  }

  render() {
    const { initialTabs } = this.props;
    const pageTitle = this.state.tabs;
    let   header;;

    if (this.state.headerIndex == 0) {
        header = () => (
          <LinearGradient start={[0.0, 1.0]} end={[1.0, 1.0]} locations={[0, 1]} colors={['#d70c52', '#e94d1c']}>
            <Header style={{ height: Platform.OS === 'ios' ? 68 : 48, paddingHorizontal: 21.5, backgroundColor: 'transparent', justifyContent: 'center' }}>
              <Button
                transparent
                onPress={() => Actions.refresh({ key: 'sideMenu', open: value => !value })}>
                <Image source={assets.menu} style={{ width: 24, height: 24 }} />
              </Button>
              <Title style={[Font.headStyle, margintTitleAndroid]}>{ pageTitle }</Title>
              <Button
                transparent>
                <Image source={assets.buy} style={{ width: 24, height: 24 }} />
              </Button>
              <Button
                transparent>
                <Image source={assets.chat} style={{ width: 24, height: 24 }} />
              </Button>
              <Button
                transparent>
                <Image source={assets.notification} style={{ width: 24, height: 24 }} />
              </Button>
            </Header>
          </LinearGradient>
        )
    } else if (this.state.headerIndex == 1) {
        header = () => (
            <LinearGradient start={[0.0, 1.0]} end={[1.0, 1.0]} locations={[0, 1]} colors={['#d70c52', '#e94d1c']}>
                <Header style={{ height: Platform.OS === 'ios' ? 68 : 48, paddingHorizontal: 13, backgroundColor: 'transparent', justifyContent: 'center' }}>
                    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View style = {{flex: 1}}>
                            <SearchBar onSearchChange = {() => console.log('On Focus')}
                                      height = {32}
                                      iconColor = {'rgba(255, 255, 255, .65)'}
                                      placeholder = {'Search products or shop'}
                                      placeholderColor = {'rgba(255, 255, 255, .65)'}
                                      autoCorrect = {false}
                                      padding = {5}
                                      returnKeyType = {'search'}
                                      inputStyle = {{borderRadius: 5, backgroundColor: 'rgba(0, 0, 0, .1)', borderBottomWidth: 0}}
                                      onFocus = {() => console.log('On Focus')}
                                      onBlur = {() => console.log('On Blur')}
                            />
                        </View>
                        <View>
                            <Button
                              transparent>
                              <Image source={assets.buy} style={{ width: 24, height: 24 }} />
                            </Button>
                        </View>
                    </View>
                </Header>
            </LinearGradient>
            
        )
    }
    
    return (
      <View style={{ flex: 1 }}>
        { header() }
        { this.renderContent() }
        <Footer initialTabs={initialTabs} getTabsState={value => this._getTabsState(value)} />
      </View>
    )
  }
}

export default Main;
