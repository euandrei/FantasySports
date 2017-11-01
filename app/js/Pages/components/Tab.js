import React from 'react';
import {
    Text,
    Image,
    View,
    Platform,
    TouchableOpacity
} from 'react-native';

import { colors, smallTabStyle } from "../styles";

export default class Tab extends React.Component{ 
	constructor(props){
		super(props);
	}

	render(){
		return (
			<View style={smallTabStyle.tabContainer}>
				{this.props.children}
			</View>
		)
	}
}
