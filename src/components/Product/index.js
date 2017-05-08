import React                    from 'react';
import { View, Text, Image }    from 'react-native';

import {FONT_FAMILY_STYLE}          from '../../assets/fonts/Font';
import styles                   from './styles';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style = {styles.container} width = {this.props.width}>
                <Image source = {this.props.image} style = {{marginBottom: 7, width: this.props.imageWidth, height: this.props.imageHeight}}/>
                <View style = {styles.sub_container1}>
                    <Text style = {styles.product_name} numberOfLines = {2}>{this.props.name}</Text>
                    <Text style = {styles.product_shop} numberOfLines = {1}>{this.props.shop}</Text>
                </View>
                <View style = {styles.sub_container2}>
                    <Text style = {styles.product_price}>{this.props.price}</Text>
                    <ButtonRemain 
                        value = {this.props.discount}
                        width = {this.props.width / 2.5}
                        height = {this.props.width / 6.5}/>
                </View>
            </View> 
        );
    }
}

Product.propTypes = {
    image:      React.PropTypes.any.isRequired,
    imageWidth: React.PropTypes.number.isRequired,
    imageHeight:React.PropTypes.number.isRequired,
    name:       React.PropTypes.string.isRequired,
    price:      React.PropTypes.string.isRequired,
    discount:   React.PropTypes.string.isRequired,
    width:      React.PropTypes.number,
}

class ButtonRemain extends React.Component {
    render () {
        let width   = this.props.width;
        let height  = this.props.height;
        let value   = this.props.value; 
        return (
            <View style = {{width: width, height: height,}}>
                    <View style = {{width: width, height: height/1.5, borderRadius: height/2, backgroundColor: 'rgba(142,210,89, 255)', position: 'absolute', left: 0, top: height*0.25/1.5, alignItems:'center', justifyContent: 'center',}}>
                        <Text style = {{height: height/1.5, color: 'white', fontSize: 14, fontWeight: 'bold', marginLeft: 10, fontFamily: FONT_FAMILY_STYLE.medium, alignItems: 'center', justifyContent: 'center'}}>{value}</Text>
                    </View>
                    <View style = {{width:height, height: height, borderRadius: height / 2, backgroundColor:'rgba(142,210,89, 255)', position: 'absolute', left: 0, top: 0, alignItems:'center', justifyContent: 'center',}}>
                        <View style = {{width:height/2.5, height: height/2.5, borderRadius: height / 5, backgroundColor:'rgba(255,255,255, 255)',}}></View>
                    </View>    
            </View>
        );
    }
}

export default Product;