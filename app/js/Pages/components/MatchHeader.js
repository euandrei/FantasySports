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
import TiltButton from './TiltButton';

export default class MatchHeader extends React.Component{ 
	constructor(props){
		super(props);	
	}
	render(){
		return (
			<View style={matchHeaderStyle.container}>
				<View style={matchHeaderStyle.headerWrapper}>
					<View style={matchHeaderStyle.user}>
						<View style={matchHeaderStyle.userImage}/>
						<View style={matchHeaderStyle.username} >
							<Text style={matchHeaderStyle.usernameText}>{this.props.username}</Text>
							<Text style={matchHeaderStyle.usernameStreak}>{this.props.streak} GAME WIN STREAK</Text>
						</View>
					</View>
					<View style={matchHeaderStyle.gold}>
						<Image source={require('../../../assets/circle-bet.png')} style={matchHeaderStyle.yellowCircle} />
						<Text style={matchHeaderStyle.goldText}>{this.props.gold}</Text>
					</View>
					<View style={matchHeaderStyle.level}>
						<Text style={matchHeaderStyle.levelText}>{this.props.level}</Text>
						<View style={matchHeaderStyle.levelProgress}><View style={[matchHeaderStyle.levelProgressComplete,this.props.levelProgress ? {width: this.props.levelProgress} : '0%']}/></View>
					</View>

				</View>
				<View style={matchHeaderStyle.freePackWrapper}>
					<View style={[matchHeaderStyle.tiltButtonWrapper, {backgroundColor: this.props.freePackTimer ? colors.darkGreyBlue : colors.transparent }]}>
						<LinearGradient colors={[colors.transparent, this.props.freePackTimer ? colors.transparent : colors.neonBlueBg]} style={matchHeaderStyle.gradient}>
							<TouchableOpacity onPress={()=>{this.props.getFreePack()}} style={[matchHeaderStyle.button, {borderColor: this.props.freePackTimer ? colors.transparent : colors.neonBlueBg}]}>
								<View style={[matchHeaderStyle.freePackTextWrapper,{}]}><Text style={[matchHeaderStyle.freePackText,this.props.freePackTimer ? {color: 'rgba(255,255,255,0.3)'}:{color: colors.white}]}>FREE PACK</Text></View>
								<View style={[matchHeaderStyle.freePackTextWrapper,{alignItems: 'flex-end',}]}><Text style={matchHeaderStyle.freePackTimer}>{this.props.freePackTimer ? this.props.freePackTimer : 'OPEN'}</Text></View>
							</TouchableOpacity>
						</LinearGradient>
					</View>
				</View>
			</View>
		)
	}
}
