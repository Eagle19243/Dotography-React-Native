import React                                              from 'react'
import {Animated, View, Text, ScrollView, Dimensions}     from 'react-native'
import SearchBar                                          from '../../components/SearchBar/SearchBar';
import {TabViewAnimated, TabBarTop, TabViewPagerPan}      from 'react-native-tab-view';
import {StyleSheet}                                       from 'react-native';
import {Actions}                                          from 'react-native-router-flux';
import {connect}                                          from 'react-redux';

import Recommended                                        from './recommended/index';

import RecommendedProducts                                from './recommended/recommendedProducts';
import RecentViews                                        from './recommended/recentViews';
import PopularShops                                       from './recommended/popularShops';

import styles                                             from './styles';

const { width, height } = Dimensions.get('window');

class Shop extends React.Component {

  state = {
        index: 0,
        routes: [
            { key: 'Recommended', title: 'Recommended' },
            { key: 'Category', title: 'Category' },
            { key: 'Nearby', title: 'Nearby'},
        ],
  };

  componentWillUnmount(nextProps, nextState) {
      this.props.parent.setState({headerIndex: 0});
  }

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    console.log('PROPSS', props);
    return (<TabBarTop 
        {...props}
        indicatorStyle={styles.tab_indicator}
        style={styles.tab_bar}
        renderLabel = {this._renderTabLabel(props)}
    />);
  };

  _renderTabLabel = (props) => ({route, index}) => {
        return (
            <Animated.Text style={styles.tab_label}>
                {route.title}
            </Animated.Text>
        );
      
  } 

  _renderScene = ({ route }) => {
    switch (route.key) {
    case 'Recommended':
        // return <PopularShops/>;
        // return <RecentViews/>;
        // return <RecommendedProductsPage/>;
        return <Recommended />;
    case 'Category':
      return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]} />;
    case 'Nearby':
        return <View style={[ styles.page, { backgroundColor: '#67fab7' } ]} />;
    default:
      return null;
    }
  };

  _renderPager = (props) => {
      return <TabViewPagerPan {...props} swipeEnabled = {false} />
  };

  _handleScroll = (event) => {
      var currentOffset = event.nativeEvent.contentOffset.y;
      var direction = currentOffset > this.offset ? 'down' : 'up';
      this.offset = currentOffset;

      if (currentOffset > 0) {
          this.props.parent.setState({headerIndex: 1});
      } else {
          this.props.parent.setState({headerIndex: 0});
      }
  }

  render() {
        return (
            <ScrollView
                style = {styles.container}
                ref = "scrollView"
                contentInset = {{bottom:40}}
                showsVerticalScrollIndicator = {false}
                automaticallyAdjustContentInsets = {false}
                onScroll = {this._handleScroll}
                >

                <SearchBar onSearchChange = {() => console.log('On Focus')}
                           height = {35}
                           onFocus = {() => console.log('On Focus')}
                           onBlur = {() => console.log('On Blur')}
                           placeholder = {'Search products or shop'}
                           autoCorrect = {false}
                           padding = {5}
                           returnKeyType = {'search'}
                           inputStyle = {{borderBottomWidth: 1}}
                />

                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderPager = {this._renderPager}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                />

            </ScrollView>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        actionScrollDown: () => dispatch(actionScrollDown())
    }
}

Shop = connect(undefined, mapDispatchToProps)(Shop);

export default Shop;
