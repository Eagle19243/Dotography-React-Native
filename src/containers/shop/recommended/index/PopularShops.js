import React                            from 'react';
import {View, Text, TouchableOpacity, ListView}   from 'react-native';
import {Dimensions}                     from 'react-native';

import Shop                             from '../../../../components/Shop';
import styles                           from './styles';
import {assets}                         from '../../../../lib/constants/assets';

const { width, height } = Dimensions.get('window');

class PopularShops extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    }

    componentDidMount() {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var dataItem = new Array();
            dataItem['image'] = assets.shop1;
            dataItem['logo']  = assets.shop1_logo;
            dataItem['name']  = "Nev's T-shirts";
            dataItem["owner"] = "Neville Johnson";

            data.push(dataItem);
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
        });
    }

    renderData(dataItem, sectionID, rowID) {
        var marginLeft = 5;
        var marginRight = 5;
        if (rowID == 0) {
            marginLeft = 15
        } else if (rowID == 9){
            marginRight = 15;
        }

        return (
            <View style = {{marginLeft: marginLeft, marginRight: marginRight}}>
                <Shop 
                    image = {assets.shop1} 
                    imageWidth = {220}
                    imageHeight = {124}
                    logo = {assets.shop1_logo}
                    name = "Nev's T-shirts" 
                    owner = "Neville Johnson"
                    width = {220}/>
            </View>
        );
    }

    render() {
        return (
            <View style = {styles.section_container}>
                <View style = {styles.section_header}>
                    <Text style = {styles.section_title}>Popular shops</Text>
                    <TouchableOpacity>
                        <Text style = {styles.view_all_text}>View all &gt; </Text>
                    </TouchableOpacity>
                </View>

                <ListView
                        horizontal = {true}
                        vertical = {false}
                        showsVerticalScrollIndicator = {false}
                        showsHorizontalScrollIndicator = {false}
                        automaticallyAdjustContentInsets = {false} 
                        enableEmptySections = {true}
                        dataSource = {this.state.dataSource}
                        renderRow = {this.renderData} 
                        style = {styles.section_content}/>
            
            </View>
        );
    }
};

export default PopularShops;