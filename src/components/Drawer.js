import React from 'react';
import Drawer from 'react-native-drawer';

class Drawers extends React.Component {
  render() {
    return (
      <Drawer
        ref="navigation"
        type="displace" >
      </Drawer>
    );
  }
}

export default Drawers;
