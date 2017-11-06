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
		let newWidth =  (windowWidth) / 4.5 ;
		switch(this.props.type){
			case "buff": 
				return (<View style={gridStyle.imageWrapper}>
					  		{<Image style={{width: newWidth}} source={this.props.image ? this.props.image : require('../../../assets/buffs/plus.png')} resizeMode='contain' />}
						</View>
					)
			case "nerf":
				return (<View style={gridStyle.imageWrapper}>
					  		{<Image style={{width: newWidth}} source={this.props.image ? this.props.image : require('../../../assets/nerfs/plus.png')} resizeMode='contain' />}
						</View>
					)
			case "player":
				return (
						<View style={gridStyle.imageWrapper}>
					  		{<Image style={{width: newWidth}} source={this.props.image ? this.props.image : require('../../../assets/players/plus.png')} resizeMode='contain' />}
						</View>
					)
			default: return (<View/>)
			
		}
	}

}


