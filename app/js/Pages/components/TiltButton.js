import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

import GridCell from "./GridCell.js"
import { gridStyle,userProfileHeaderStyle, tiltButton, colors } from "../styles";
import LinearGradient from 'react-native-linear-gradient';
export default class TiltButton extends React.Component {
	
	
	render(){
		return(
			<View style={[tiltButton.tiltButtonWrapper]}>
				<LinearGradient colors={[colors.transparent, this.props.backgroundColor]} style={[gridStyle.linearGradient,tiltButton.gradient]}>
					<TouchableOpacity 
						onPress={()=>{this.props.onPress()}} 
						style={[tiltButton.button, this.props.style,{borderColor: this.props.borderColor, flexDirection:'row', paddingTop: 7, paddingBottom: 7}]}>
						{this.props.money && <Image source={require('../../../assets/circle-bet.png')} style={userProfileHeaderStyle.yellowCircle} />}
						<Text style={tiltButton.buttonText}>{this.props.text}</Text>
					</TouchableOpacity>
				</LinearGradient>
			</View>
				
		)
	}
}
