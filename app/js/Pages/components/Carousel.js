import React from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import { carouselStyle, colors } from "../styles";
import CarouselSnap, { Pagination } from 'react-native-snap-carousel';


const carouselItems = [
    {
        title: 'Special Offer!',
        gold: '10k GOLD',
        oldPrice: '$99.99',
        newPrice: '$49.99',
    },
    {
        title: 'Special Offer!',
        gold: '50k GOLD',
        oldPrice: '$99.99',
        newPrice: '$49.99',
    },{
        title: 'Special Offer!',
        gold: '100k GOLD',
        oldPrice: '$99.99',
        newPrice: '$49.99',
    },{
        title: 'Special Offer!',
        gold: '500k GOLD',
        oldPrice: '$99.99',
        newPrice: '$49.99',
    },
];


export default class Carousel extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			slider1ActiveSlide: 1,
            slider1Ref: null
		}
		this._renderItem = this._renderItem.bind(this);
	}

	 _renderItem ({item, index}) {
	 	const width = Dimensions.get("window").width - 100;
        return (
            <TouchableOpacity
              activeOpacity={1}
              style={[carouselStyle.carouselItem ,{width: width,}]}
              onPress={() => {}}
              >
                <View style={carouselStyle.title}>
                	<Text style={carouselStyle.titleText}>{item.title.toUpperCase()}</Text>
                	<Text style={carouselStyle.goldText}>{item.gold}</Text>
                </View>
                <View style={carouselStyle.price}>
                	<Text style={carouselStyle.oldPrice}>{item.oldPrice}</Text>
                	<Text style={carouselStyle.newPrice}>{item.newPrice}</Text>
                </View>
                <Image />
            </TouchableOpacity>

        );
    }

   
	render(){	
		const { slider1ActiveSlide, slider1Ref } = this.state;
        const width = Dimensions.get("window").width;
        const itemWidth = Dimensions.get("window").width - 100;
		return(
			<View style={carouselStyle.container}>
                <CarouselSnap
                  ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                  data={carouselItems}
                  renderItem={this._renderItem}
                  sliderWidth={width}
                  itemWidth={itemWidth}
                 
                  firstItem={slider1ActiveSlide}
                  inactiveSlideScale={0.93}
                  inactiveSlideOpacity={0.7}
                  
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
			</View>
		)
	}
}
