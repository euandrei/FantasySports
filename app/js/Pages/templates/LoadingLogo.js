import React from 'react';
import {
    Text,
    Image,
    View,
    Dimensions
} from 'react-native';

import { colors } from "../../Pages/styles";

export default class LoadingLogo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		let height = Dimensions.get('window').height;
		let width = Dimensions.get('window').width;
		return(
			<View style={{minHeight: height,alignItems: 'center',justifyContent: 'center',backgroundColor: colors.marine}}>
				<Image source={require('../../../assets/logo.png')} style={{width: width/3}}/>
			</View>
		)
	}
}