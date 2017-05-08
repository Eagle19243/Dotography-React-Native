import React                                        from 'react';
import {View, Text, TouchableOpacity, ListView}     from 'react-native';
import {Dimensions}                                 from 'react-native';

import Product                                      from '../../../../components/Product';
import styles                                       from './styles';
import {assets}                                     from '../../../../lib/constants/assets';

const { width, height } = Dimensions.get('window');

class BestSellers extends React.Component {

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
            var dataItems = new Array();
            var dataItem1 = new Array();
            dataItem1['image'] = assets.product1;
            dataItem1['name']  = "Navigator Striped Bucket Hat";
            dataItem1['shop']  = "Nev's T-shirts";
            dataItem1["price"] = "$49.99";
            dataItem1["discount"] = "10%";

            var dataItem2 = new Array();
            dataItem2['image'] = assets.product1;
            dataItem2['name']  = "Navigator Striped Bucket Hat";
            dataItem2['shop']  = "Nev's T-shirts";
            dataItem2["price"] = "$49.99";
            dataItem2["discount"] = "10%";

            dataItems.push(dataItem1);
            dataItems.push(dataItem2);
            data.push(dataItems);
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
                <View style = {{marginBottom: 10,}} >
                    <Product 
                        image = {dataItem[0]['image']}
                        imageWidth  = {118}
                        imageHeight = {118} 
                        name = {dataItem[0]['name']}
                        shop = {dataItem[0]['shop']}
                        price = {dataItem[0]['price']}
                        discount = {dataItem[0]['discount']}
                        width = {130}/>
                </View>
                <View>
                    <Product 
                        image = {dataItem[1]['image']}
                        imageWidth  = {118}
                        imageHeight = {118} 
                        name = {dataItem[1]['name']}
                        shop = {dataItem[1]['shop']}
                        price = {dataItem[1]['price']}
                        discount = {dataItem[1]['discount']}
                        width = {130}/>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style = {styles.section_container}>
                <View style = {styles.section_header}>
                    <Text style = {styles.section_title}>Best sellers</Text>
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
 
export default BestSellers;