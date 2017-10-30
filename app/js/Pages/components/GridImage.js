import React from 'react';
import {
    Text,
    Image,
    View,
    Dimensions,
    StyleSheet
} from 'react-native';
import { gridStyle, colors } from "../styles";

export default class GridImage extends React.Component {
	render(){
		let windowWidth = Dimensions.get("window").width;
		let newWidth =  (windowWidth) / 5 ;

		switch(this.props.type){
			case "power-up": 

				return (<View style={gridStyle.imageWrapper}>
					  		{this.props.image && <Image style={{width: newWidth}} source={this.props.image} resizeMode='contain' />}
						</View>
					)
				
			case "plus":
				return (<View style={gridStyle.imageWrapper}>
					  		{this.props.image && <Image style={gridStyle.imagePlus} source={this.props.image} resizeMode='contain' />}
						</View>
					)
			case "player":
				return (
						<Text>NEED TESTING</Text>
					)
			
		}
	}

}


