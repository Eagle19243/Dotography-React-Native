import React                        from 'react';
import {View, Text, Image}          from 'react-native';

import ButtonFollow                 from '../buttons/buttonFollow';
import styles                       from './styles';

class Shop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
             <View style = {styles.container} width = {this.props.width}>
                <Image source = {this.props.image} style = {{width: this.props.imageWidth, height: this.props.imageHeight}} width = {this.props.width - 5}/>
                <View style = {styles.sub_container1}>
                    <View style = {styles.sub_container2}>
                        <Image source = {this.props.logo} style = {styles.shop_logo}/>
                        <View style = {styles.sub_container3}>
                            <Text style = {styles.shop_name}>{this.props.name}</Text>
                            <Text style = {styles.shop_owner}>{this.props.owner}</Text>
                        </View>
                    </View>
                    <ButtonFollow width = {86}
                                  height = {28}/>
                </View>
             </View>
        );
    }
}

Shop.propTypes = {
    image:      React.PropTypes.any.isRequired,
    imageWidth: React.PropTypes.number.isRequired,
    imageHeight:React.PropTypes.number.isRequired,
    logo:       React.PropTypes.any.isRequired,
    name:       React.PropTypes.string.isRequired,
    owner:      React.PropTypes.string.isRequired,
    width:      React.PropTypes.number,
}

export default Shop;