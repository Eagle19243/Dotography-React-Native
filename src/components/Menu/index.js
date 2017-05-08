import React from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, Container, Header, View, List, ListItem, Thumbnail, Icon } from 'native-base'
import styles from './styles'

class Menu extends React.Component {
  static contextTypes = {
    drawer: React.PropTypes.object
  }

  static propTypes = {
    username: React.PropTypes.string,
    logout: React.PropTypes.func
  }

  render() {
    const { username = '', logout } = this.props
    const drawer = this.context.drawer;
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <View style={styles.wrapperHeader}>
            <View style={styles.wrapperImageProfile}>
              <Thumbnail size={50} source={require('../../assets/images/user_icon.png')} />
            </View>
            <View style={styles.wrapperDetailProfile}>
              <Text style={styles.headerText}> { username } </Text>
              <View style={styles.iconEditProfileWrapper}>
                <Icon name={'md-create'} style={styles.iconEditProfile} />
              </View>
            </View>
          </View>
        </Header>
        <Content>
          <List>
            <ListItem onPress={() => { drawer.close(); Actions.index({ initialTabs: 'FEED' }); } } style={styles.list} >
              <Text style={styles.text} >FEED</Text>
            </ListItem>
            <ListItem onPress={() => { drawer.close(); Actions.index({ initialTabs: 'SHOP', indexTab: 0 }); } } style={styles.list} >
              <Text style={styles.text} >SHOP</Text>
            </ListItem>
            <ListItem onPress={() => { drawer.close(); Actions.index({ initialTabs: 'BANK' }); } } style={styles.list} >
              <Text style={styles.text} >BANK</Text>
            </ListItem>
            <ListItem onPress={() => { drawer.close(); Actions.index({ initialTabs: 'MESSAGE' }); }} style={styles.list} >
              <Text style={styles.text} >MESSAGE</Text>
            </ListItem>
            <ListItem onPress={() => { drawer.close(); Actions.index({ initialTabs: 'HELP' }); } } style={styles.list} >
              <Text style={styles.text} >HELP CENTER</Text>
            </ListItem>
            <ListItem onPress={() => { drawer.close(); Actions.index({ initialTabs: 'ABOUT' }); }} style={styles.list} >
              <Text style={styles.text} >ABOUT US</Text>
            </ListItem>
            <ListItem onPress={() => {
              Actions.root({ key: 'login', type: 'reset' });
            }} style={styles.list} >
              <Text style={styles.text} >LOGOUT</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

export default Menu;
