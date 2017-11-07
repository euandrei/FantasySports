import React from 'react';
import {
    Text,
    Image,
    View,
    Platform,
    TouchableOpacity
} from 'react-native';

import { colors, textFieldStyle } from "../styles";

export default class TextField extends React.Component{ 
	constructor(props){
		super(props);
		this.state = {
		}
	}
	

	render(){
		return (
			<View style={textFieldStyle.container}>
				
			</View>
		)
	}
}
