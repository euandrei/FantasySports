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

import { colors, textFieldStyle } from "../styles";

export default class TextField extends React.Component{ 
	constructor(props){
		super(props);
		this.state = {
			focus: false,
			behavior: 'height',
		}
	}
	
	componentWillMount(){
		if(this.props.type == 'account'){
			if(this.props.account){
				this.setState({
					text: this.props.account,
				})
			}
			else{
				this.setState({
					text: "Connect account",
					notConnected: true,
				})
			}
		}
		else if(this.props.type == 'default'){
			this.setState({
				text: this.props.value,
			})
		}
	}

	render(){
		return (
			<View style={textFieldStyle.container}>
				<KeyboardAvoidingView behavior={this.state.behavior}>
					<Text style={textFieldStyle.title}>{this.props.title}</Text>
		            <View style={textFieldStyle.inputWrapper}>
			            {this.state.notConnected ? 
			            	<TouchableOpacity onPress={this.props.onAccountPress}><Text style={{color: colors.neonBlue}}>Connect account</Text></TouchableOpacity>
			            : 
				            <TextInput
				              	style={[textFieldStyle.textInput, this.state.focus ? {color: colors.white} : '']}
				              	onChangeText={(text) => this.setState({text})}
				                value={this.state.text}
				                onFocus={()=>{this.setState({focus: true,})}}
				                onBlur={()=>{this.setState({focus: false,})}}
				                placeholder={this.props.type == 'password' ? "": "Some nice placeholder"}
				                placeholderTextColor={colors.blueyGrey}
				                editable={this.props.type != 'account'}
				                secureTextEntry={this.props.type == 'password'}
				            />
				        }
			            { (this.props.type == 'account' && this.props.account ) && <TouchableOpacity onPress={this.props.onAccountPress} style={textFieldStyle.changeButton}><Text style={{color: colors.white}}>Change</Text></TouchableOpacity>}
		            </View>


		         </KeyboardAvoidingView>
			</View>
		)
	}
}
