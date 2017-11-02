import React from 'react';
import {
    Text,
    Image,
    View,
    Platform,
    TouchableOpacity
} from 'react-native';

import { colors, matchHeaderStyle } from "../styles";
import LinearGradient from 'react-native-linear-gradient';

export default class MatchHeader extends React.Component{ 
	constructor(props){
		super(props);	
	}
	render(){
		return (
			<View style={matchHeaderStyle.container}>
				
			</View>
		)
	}
}
