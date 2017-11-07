import React from 'react';
import {
    Text,
    Image,
    View,
    Platform,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
} from 'react-native';

import { colors, menuComponentStyle } from "../styles";

export default class MenuComponent extends React.Component{ 
	constructor(props){
		super(props);
		this.state = {

		}
	}
	

	render(){
		return (
			<View style={menuComponentStyle.container}>
				<Text style={{color: colors.bluishGrey, fontSize: 11, marginBottom: 10,}}>{this.props.title}</Text>
				{
					this.props.menus && this.props.menus.map((menu) => {
						return (
							<TouchableOpacity style={{paddingBottom: 6, marginBottom: 11, borderColor: colors.metallicBlue, borderBottomWidth: 1,}} onPress={()=>{/*SOMETHING with each button*/}}>
								<Text style={{color: colors.bluishGrey, fontSize: 14,}}>{menu.title}</Text>
							</TouchableOpacity>
						)
					})
				}
			</View>
		)
	}
}
