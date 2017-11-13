import React from 'react'
import {
    Text,
    Image,
    View,
    Platform,
    TouchableOpacity
} from 'react-native'

import { colors, headerStyle } from "../styles"
import LinearGradient from 'react-native-linear-gradient'

import CircleButton from './CircleButton'

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
					{this.props.title && <Text style={headerStyle.titleText} >{this.props.title.toUpperCase()}</Text>}
					{this.props.subtitle && <Text style={headerStyle.subtitleText}>{this.props.subtitle.toUpperCase()}</Text>}
				</View>
			)
		}
		else{
			return (
				<View style={headerStyle.title}>
					{this.props.title && <Text style={headerStyle.titleText}>{this.props.title.toUpperCase()}</Text>}
				</View>
			)
		}
	}

	_renderRightButton(){
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
					<TouchableOpacity onPress={this.props.onSettings}>
						<Image source={this.props.settings} resizeMode='contain' style={headerStyle.settingsIcon} />
					</TouchableOpacity>
					<CircleButton 
						text={this.props.circle}
						onPress={() => {
							
							// 
						}}
					/>
				</View>
			)
		}
		else if(this.props.circle){
			return (
				<CircleButton 
					text={this.props.circle}
					onPress={() => {
						
						// 
					}}
				/>
			)
		}
		else if(this.props.button){
			return (
				<TouchableOpacity style={[headerStyle.button, {zIndex: 5}]} onPress={this.props.onPress}>
					<Text style={headerStyle.buttonText}>{this.props.button}</Text>
				</TouchableOpacity>
			)
		}
		else if(this.props.settings){
			return (
				<TouchableOpacity onPress={this.props.onSettings}>
					<Image source={this.props.settings} resizeMode='contain' style={headerStyle.settingsIcon} />
				</TouchableOpacity>
			)
		}
	}

	render(){
		return (
			<View style={headerStyle.container}>
				<View style={headerStyle.leftComponent}>
					<TouchableOpacity onPress={this.props.onPressLeft}>
						{this.props.leftIcon && <Image style={{width: 9, height: '100%',}} source={this.props.leftIcon} resizeMode='contain' />}
					</TouchableOpacity>
				</View>
				<View style={headerStyle.centerComponent}>
					{this._renderTitle()}
				</View>
				<View style={headerStyle.rightComponent}>
					{this._renderRightButton()}
				</View>
			</View>
		)
	}
}
