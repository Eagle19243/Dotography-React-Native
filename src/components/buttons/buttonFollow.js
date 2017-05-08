import React                                    from 'react';
import {View, Text, TouchableOpacity, Image}    from 'react-native'; 
import {StyleSheet}                             from 'react-native';
import Icon                                     from 'react-native-vector-icons/Ionicons';
import { FONT_FAMILY_STYLE }                    from '../../assets/fonts/Font';

class ButtonFollow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followButton: 'follow',
        };

    }

    onPress() {
        this.setState({followButton: this.state.followButton === 'follow' ? 'following': 'follow'});
    }

    render() {
        if (this.state.followButton === 'follow') {
            return (
                <TouchableOpacity
                    style = {{flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5,}}
                    onPress = { () => this.onPress() }>
                    <View style = {styles.follow_container} width = {this.props.width} height = {this.props.height} >
                        <Icon name = "ios-add" size = {this.props.height - 5} color = "#51A1FF"/>
                        <Text style = {styles.follow_text}>Follow</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        else if (this.state.followButton === 'following') {
            return (
                <TouchableOpacity
                    style = {{flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5,}}
                    onPress = { () => this.onPress() }>
                    <View style = {styles.following_container} width = {this.props.width} height = {this.props.height} >
                        <Icon name = "ios-checkmark" size = {this.props.height - 5} color = "#FFFFFF"/>
                        <Text style = {styles.following_text}>Following</Text>
                    </View>
                </TouchableOpacity>
            );
        }
    }
}

ButtonFollow.propTypes = {
    width:          React.PropTypes.number,
    height:         React.PropTypes.number,
    onPress:        React.PropTypes.func,
}

const styles = StyleSheet.create({
    follow_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle : 'solid',
        borderWidth: 1,
        borderColor: 'rgba(81, 161, 255, 255)',
        borderRadius: 5,
    },

    follow_text: {
        color: 'rgba(81, 161, 255, 255)',
        fontSize: 16,
        fontFamily: FONT_FAMILY_STYLE.medium,
        marginLeft: 5,
    },

    following_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle : 'solid',
        borderWidth: 1,
        borderColor: 'rgba(81, 161, 255, 255)',
        borderRadius: 5,
        backgroundColor: 'rgba(81, 161, 255, 255)',
    },

    following_text: {
        color: 'rgba(255, 255, 255, 255)',
        fontSize: 16,
        fontFamily: FONT_FAMILY_STYLE.medium,
        marginLeft: 5,
    }
});

export default ButtonFollow;