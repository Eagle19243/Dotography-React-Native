import React                                        from 'react';
import {View, Text, ActivityIndicator, ListView, Image, Alert, Dimensions}    from 'react-native';

import SearchBar                                    from '../../../../components/SearchBar/SearchBar';
import Product                                      from '../../../../components/Product';
import styles                                       from './styles';
import {assets}                                     from '../../../../lib/constants/assets';
import { FONT_FAMILY_STYLE }                        from '../../../../assets/fonts/Font';
import ButtonFollow                                 from '../../../../components/buttons/buttonFollow';

const { width, height } = Dimensions.get('window');

class PopularShops extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2,}),
            dataSource_product: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2,}),
        };

        this.renderShopData = this.renderShopData.bind(this);
        
    }

    componentDidMount() {
        var data_product = new Array();
        for (var i = 0; i < 10; i++) {
            var dataItem = new Array();
            dataItem['image'] = assets.product1;
            dataItem['name']  = "Navigator Striped Bucket Hat";
            dataItem['shop']  = "Nev's T-shirts";
            dataItem["price"] = "$49.99";
            dataItem["discount"] = "10%";

            data_product.push(dataItem);
        }

        var data_shop = new Array();
        for (var i = 0; i < 20; i++) {
            var dataItem = new Array();
            dataItem['logo']    = assets.shop1_logo;
            dataItem['name']    = "Nev's T-shirts";
            dataItem['owner']   = "Neville Johnson";
            // dataItem['products'] = data_product;

            data_shop.push(dataItem);
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data_shop),
            dataSource_product: this.state.dataSource_product.cloneWithRows(data_product),
        });
    }

    renderShopData(dataItem, sectionID, rowID) {
       return (
           <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 15, marginRight: 15, marginTop: 40, marginBottom: 15,}}>
                    <Image source = {dataItem['logo']} style = {{width: 48, height: 48, borderWidth: 1, borderRadius: 24, borderColor: 'rgba(14, 43, 77, .12)',}} />
                    <View style = {{flex: 1, marginLeft: 10,}}>
                        <Text style = {{fontSize: 18, fontFamily: FONT_FAMILY_STYLE.medium, color: 'rgba(14, 43, 77, 255)',}}>{dataItem['name']}</Text>
                        <Text style = {{fontSize: 16, fontFamily: FONT_FAMILY_STYLE.medium, color: 'rgba(14, 43, 77, .65)',}}>{dataItem['owner']}</Text>
                    </View>
                    <View style = {{width: 86, height: 28}}>
                        <ButtonFollow width = {86} height = {28} />
                    </View>
                </View>
                <ListView 
                        horizontal = {true}
                        showsVerticalScrollIndicator = {false}
                        showsHorizontalScrollIndicator = {false}
                        automaticallyAdjustContentInsets = {false}
                        enableEmptySections = {true}
                        dataSource = {this.state.dataSource_product}
                        renderRow = {this.renderProductData} />
           </View>
       );
    }

    renderProductData(dataItem, sectionID, rowID) {
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
            <View style = {{flex: 1,}}>
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
                
                <ListView 
                    vertical = {true}
                    showsVerticalScrollIndicator = {false}
                    showsHorizontalScrollIndicator = {false}
                    automaticallyAdjustContentInsets = {false}
                    enableEmptySections = {true}
                    dataSource = {this.state.dataSource}
                    renderRow = {this.renderShopData}
                    style = {styles.listView} />
            </View>
        );
    }
}

export default PopularShops;