import React                                        from 'react';
import {View, Text, TouchableOpacity, ListView}     from 'react-native';
import {Dimensions}                                 from 'react-native';

import Product                                      from '../../../../components/Product';
import styles                                       from './styles';
import {assets}                                     from '../../../../lib/constants/assets';

const { width, height } = Dimensions.get('window');

class RecentViews extends React.Component {

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
            dataItem['image'] = assets.product1;
            dataItem['name']  = "Navigator Striped Bucket Hat";
            dataItem['shop']  = "Nev's T-shirts";
            dataItem["price"] = "$49.99";
            dataItem["discount"] = "10%";

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
                <Product 
                    image = {dataItem['image']}
                    imageWidth  = {118}
                    imageHeight = {118} 
                    name = {dataItem['name']}
                    shop = {dataItem['shop']}
                    price = {dataItem['price']}
                    discount = {dataItem['discount']}
                    width = {130}/>
            </View>
        );
    }

    render() {
        return (
            <View style = {styles.section_container}>
                <View style = {styles.section_header}>
                    <Text style = {styles.section_title}>Recent views</Text>
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
 
export default RecentViews;