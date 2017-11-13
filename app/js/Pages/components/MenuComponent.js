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
import { Actions } from 'react-native-router-flux';
export default class MenuComponent extends React.Component{ 
	constructor(props){
		super(props);
		this.state = {

		}
	}
	onChangePassword(){
		Actions.ChangePassword();
	}
	onHelp(){

	}
	onLogout(){
		Actions.Login();
	}

	render(){
		return (
			<View style={menuComponentStyle.container}>
				<Text style={{color: colors.bluishGrey, fontSize: 11, marginBottom: 10,}}>{this.props.title}</Text>

				<TouchableOpacity style={{paddingBottom: 6, marginBottom: 11, borderColor: colors.metallicBlue, borderBottomWidth: 1,}} onPress={this.onChangePassword.bind(this)}>
					<Text style={{color: colors.bluishGrey, fontSize: 14,}}>{'Change password'}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{paddingBottom: 6, marginBottom: 11, borderColor: colors.metallicBlue, borderBottomWidth: 1,}} onPress={this.onHelp.bind(this)}>
					<Text style={{color: colors.bluishGrey, fontSize: 14,}}>{'Help'}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{paddingBottom: 6, marginBottom: 11, borderColor: colors.metallicBlue, borderBottomWidth: 1,}} onPress={this.onLogout.bind(this)}>
					<Text style={{color: colors.bluishGrey, fontSize: 14,}}>{'Logout'}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
