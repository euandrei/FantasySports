import React from 'react';
import {
    Text,
    Image,
    View,
    Platform,
    TouchableOpacity
} from 'react-native';

import { colors, headerStyle } from "../styles";
import LinearGradient from 'react-native-linear-gradient';

export default class Header extends React.Component{ 
	constructor(props){
		super(props);

		this._renderTitle = this._renderTitle.bind(this);
		this._renderRightButton = this._renderRightButton.bind(this);
	}
	_renderTitle(){
		if(this.props.logo){
			return (
				<Image style={{width: 10}} source={this.props.logo} resizeMode='contain' style={headerStyle.logo} />
			)
		}
		else if(this.props.subtitle){
			return (
				<View style={headerStyle.titleWithSubtitle}>
					<Text style={headerStyle.titleText} >{this.props.title}</Text>
					<Text style={headerStyle.subtitleText}>{this.props.subtitle}</Text>
				</View>
			)
		}
		else{
			return (
				<View style={headerStyle.title}>
					<Text style={headerStyle.titleText}>{this.props.title}</Text>
				</View>
			)
		}
	}

	_renderRightButton(){
		console.log("PROPS",this.props)
		if(this.props.filter){
			return (
				<TouchableOpacity>
					<Image source={this.props.filter} resizeMode='contain' style={headerStyle.filterIcon} />
				</TouchableOpacity>
			)
		}
		else if(this.props.circle && this.props.settings){
			return (
				<View style={headerStyle.circleAndSettings}>
					<TouchableOpacity>
						<Image source={this.props.settings} resizeMode='contain' style={headerStyle.settingsIcon} />
					</TouchableOpacity>
					<View style={{width:31, height: 31, marginLeft: 15}}>
						<LinearGradient colors={[colors.transparent, colors.neonBlueBg]} style={{flex:1,borderRadius: 30}}>
							<View style={headerStyle.circle}>
								<Text style={headerStyle.circleText}>{this.props.circle}</Text>
							</View>
						</LinearGradient>
					</View>
				</View>
			)
		}
		else if(this.props.circle){
			return (
				<View style={{width:31, height: 31}}>
					<LinearGradient colors={[colors.transparent, colors.neonBlueBg]} style={{flex:1,borderRadius: 30}}>
						<View style={headerStyle.circle}>
							<Text style={headerStyle.circleText}>{this.props.circle}</Text>
						</View>
					</LinearGradient>
				</View>
			)
		}
		else if(this.props.button){
			return (
				<TouchableOpacity style={headerStyle.button} onPress={this.props.onPress}>
					<Text style={headerStyle.buttonText}>{this.props.button}</Text>
				</TouchableOpacity>
			)
		}
		else if(this.props.settings){
			return (
				<TouchableOpacity>
					<Image source={this.props.settings} resizeMode='contain' style={headerStyle.settingsIcon} />
				</TouchableOpacity>
			)
		}
	}
	render(){
		return (
			<View style={headerStyle.container}>
				<View style={headerStyle.leftComponent}>
					<TouchableOpacity>
						{this.props.leftIcon && <Image style={{width: 10}} source={this.props.leftIcon} resizeMode='contain' />}
					</TouchableOpacity>
				</View>
				<View style={headerStyle.centerComponent}>
					{this.props.title && this._renderTitle()}
				</View>
				<View style={headerStyle.rightComponent}>
					{this._renderRightButton()}
				</View>
			</View>
		)
	}
}