import React                                        from 'react';
import {View, Text, ActivityIndicator, ListView, Alert}    from 'react-native';

import GridView                                     from '../../../../components/GridView';
import SearchBar                                    from '../../../../components/SearchBar/SearchBar';
import Product                                      from '../../../../components/Product';
import styles                                       from './styles';
import {assets}                                     from '../../../../lib/constants/assets';

class RecentViews extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
            loaded: false,
            loadMore: false,
        };
        this.data = [];
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        
        for (let i = 0; i < 20; i++) {
            let dataItem = new Array();
            dataItem['key'] = i;
            dataItem['image'] = assets.product1;
            dataItem['name']  = "Navigator Striped Bucket Hat";
            dataItem['shop']  = "Nev's T-shirts";
            dataItem["price"] = "$49.99";
            dataItem["discount"] = "10%";

            this.data.push(dataItem);
        }

        this.setState({
            dataSource: this.data,
            loaded: true,
        });
    }

    renderLoadingView() {
        return (
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator animating = {!this.state.loaded} size = "large" />
            </View>
        );
    }

    renderData(dataItem, index) {
       
        return(
            <View key = {dataItem['key']} style = {{marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5}}>
                <Product 
                    image = {dataItem['image']}
                    imageWidth = {150}
                    imageHeight = {150}
                    name = {dataItem['name']}
                    shop = {dataItem['shop']}
                    price = {dataItem['price']}
                    discount = {dataItem['discount']}
                    width = {165}
                />
            </View>
        );
    }

    _onEndReached() {
        // Alert.alert(
        //       'Alert Title',
        //       'onEndReached',
        //       [
        //           {text: 'OK', onPress: () => console.log('Ok Pressed!')},
        //       ]
        // );
        // this.setState({loadMore: true});
        // this.fetchData();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <View style = {{flex: 1}}>
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
                <View style = {styles.container}>
                    <GridView 
                        items = {this.state.dataSource}
                        itemsPerRow = {2}
                        renderItem = {this.renderData}
                        onEndReached = {this._onEndReached}
                        onEndReachedThreshold = {30}/>

                    <ActivityIndicator animating = {!this.state.loadMore} size = "large" style = {{marginTop: 25}}/>
                 </View>
            </View>
        );
    }
}

export default RecentViews;