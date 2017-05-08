import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView
} from 'react-native';

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  }
})

class IconTabs extends React.Component {
  static tabIcons = []

  static propTypes = {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    style: React.PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      leftTabUnderline: new Animated.Value(0),
      widthTabUnderline: new Animated.Value(0),
      containerWidth: null,
    }
  }
  componentDidMount() {
    // this.props.scrollValue.addListener(this.setAnimationValue);
    this.state.leftTabUnderline.setValue(106.5);
  }

  render() {
    const tabUnderlineStyle = {
      position: 'absolute',
      height: 4,
      backgroundColor: 'navy',
      bottom: 0
      // marginLeft: this.tabsMeasurements[this.props.activeTab].left
    };
    const dynamicTabUnderline = {
      left: this.state.leftTabUnderline,
      width: this.state.widthTabUnderline,
    };
    return <View
      style={[styles.container, { backgroundColor: this.props.backgroundColor }, this.props.style]}
      onLayout={this.onContainerLayout}
    >
      <ScrollView
        ref={(scrollView) => { this.scrollView = scrollView; }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled={true}
        bounces={false}
        scrollsToTop={false}
        >
        <View
          style={[styles.tabs, { width: this.state.containerWidth, },
            this.props.tabsContainerStyle]}
          ref={'tabContainer'}
          onLayout={this.onTabContainerLayout}
          >
        {this.props.tabs.map((name, page) => {
          const renderTab = this.props.renderTab;
          return renderTab(name, page, this.props.goToPage);
        })}
        <Animated.View
          style={[tabUnderlineStyle, dynamicTabUnderline, this.props.underlineStyle]} />
        </View>
      </ScrollView>
    </View>
  }
}
export default IconTabs;
