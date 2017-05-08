import React                                from 'react';
import SearchBar                            from 'react-native-material-design-searchbar';
import {TabViewAnimated, TabBarTop}         from 'react-native-tab-view';
import {StyleSheet}                         from 'react-native';
import Swiper                               from 'react-native-swiper';
import { View, Text, Image, Dimensions, StatusBar }    from 'react-native';

import styles                               from './styles';
import {assets}                             from '../../../../lib/constants/assets';
import RecommendedProducts                  from './RecommendedProducts';
import RecentViews                          from './RecentViews';
import PopularShops                         from './PopularShops';
import BestSellers                          from './BestSellers';
import NewProducts                          from './NewProducts';

class Recommended extends React.Component {

    render() {
        const sliderPart = () => (
                <Image>
                    <Swiper style={styles.wrapper}
                        height = {200}
                        dot={<View style={styles.dot} />}
                        activeDot={<View style={styles.active_dot} />}
                        paginationStyle={styles.pagination}
                        loop={true}
                        autoplay>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={assets.slide1} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={assets.slide2} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={assets.slide3} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={assets.slide4} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={assets.slide5} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={assets.slide6} />
                        </View>
                    </Swiper>
                    <View style={styles.dot_container}></View>
                </Image>
            )
            
        return (
            
            <View 
                style = {styles.container}
                contentInset = {{bottom: 40}}>
                {sliderPart()} 

                <RecommendedProducts />
                <RecentViews />
                <PopularShops />
                <BestSellers />
                <NewProducts />
            
            </View>

        )
    }
}

export default Recommended;