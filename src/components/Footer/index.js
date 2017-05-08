import React from 'react'
import {
  Text,
  Image
} from 'react-native'
import Tabs from 'react-native-tabs'
import styles from './styles'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.initialTabs
    };
  }

  static defaultProps = {
    initialTabs: 'FEED'
  }

  render() {
    const { getTabsState } = this.props
    return (
      <Tabs
        selected={this.state.page}
        iconStyle={styles.tabsIcon}
        style={styles.tab}
        onSelect={ (el) => {
          this.setState({ page: el.props.name })
          getTabsState(el.props.name);
        }} >
        <Text name="FEED" style={styles.tabText} selectedStyle={{ color: '#e02d37' }}>FEED</Text>
        <Text name="SHOP" style={styles.tabText} selectedStyle={{ color: '#e02d37' }}>SHOP</Text>
        <Image name="BTN" source={require('../../assets/images/quick-link.png')} style={{ width: 34, height: 34 }} />
        <Text name="BANK" style={styles.tabText} selectedStyle={{ color: '#e02d37' }}>BANK</Text>
        <Text name="SELL" style={styles.tabText} selectedStyle={{ color: '#e02d37' }}>SELL</Text>
      </Tabs>
    );
  }
}

export default Footer
