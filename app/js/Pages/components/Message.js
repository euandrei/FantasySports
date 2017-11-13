import React from 'react';
import {
    Text,
    Image,
    View,
    Dimensions,
    StyleSheet,
   
} from 'react-native';
import { messageStyle, colors } from "../styles";
import TiltButton from "./TiltButton.js"

export default class Message extends React.Component {
	constructor(props){
		super(props);
		this.state = { viewRef: null };
		this._renderPlayer = this._renderPlayer.bind(this)
		this._renderItem = this._renderItem.bind(this)
	}

	_renderPlayer(){
		let type = this.props.itemType == 'QUARTERBACK' ? 'QB' : '';
		let width = Dimensions.get('window').width * 1/2;
		return (
			<View style={messageStyle.playerWrapper} > 

				<Image source={this.props.playerImage} style={{width: width, height: width}} />
				<View style={messageStyle.playerStats}>
					<View style={messageStyle.stats}>
						<Text style={messageStyle.statsTitle}>{type} RANK</Text>
						<Text style={messageStyle.statsValue}>{this.props.rank}</Text>
					</View>
					<View style={messageStyle.stats}>
						<Text style={messageStyle.statsTitle}>AVG PTS</Text>
						<Text style={messageStyle.statsValue}>{this.props.points}</Text>
					</View>
					<View style={messageStyle.stats}>
						<Text style={messageStyle.statsTitle}>LAST WEEK</Text>
						<Text style={messageStyle.statsValue}>{this.props.lastWeek}</Text>
					</View>
				</View>
				<View style={messageStyle.impact}>
					<Text style={messageStyle.impactTitle}>POINT IMPACT</Text>
					<Text style={messageStyle.impactText}>{this.props.impact}</Text>
				</View>
			</View>
		)
	}
	_renderItem(){
		if(this.props.type == 'buff'){
			color = colors.greenishTurquoise;
		}
		else if(type == 'nerf'){
			color = colors.watermelonTwo;
		}
		let width = Dimensions.get('window').width * 2/3;

		return (
			<View style={messageStyle.itemWrapper}>
				<View style={messageStyle.impact}>
					<Text style={messageStyle.impactTitle}>POINT IMPACT</Text>
					<Text style={[messageStyle.impactItemText, {color: color}]}>{this.props.type == 'buff' ? "+" : "-" }{this.props.impact}</Text>
				</View>
				<View>
					<Image source={this.props.playerImage} style={{maxWidth: width, maxHeight: width}} />
					<View style={messageStyle.yellowCircle}><Text style={messageStyle.yellowText}>{this.props.yellowText}</Text></View>
				</View>
				<View style={messageStyle.description}>
					<Text style={messageStyle.descriptionText}>{this.props.description}</Text>
				</View> 
			</View> 
		)
	}
	
	render(){
		let color;
		let {itemType, title, type} = this.props;
		if(type == 'player'){
			color = colors.blueyGrey;
		}
		else if(type == 'buff'){
			color = colors.greenishTurquoise;
		}
		else if(type == 'nerf'){
			color = colors.watermelonTwo;
		}
		let width = Dimensions.get('window').width * 2/3;
		return (
			<View style={messageStyle.container} >
				<View style={messageStyle.title} >
					<Text style={[messageStyle.itemType, {color: color}]}>{itemType.toUpperCase()}</Text>
					<Text style={messageStyle.titleText}>{title.toUpperCase()}</Text>
				</View>
				<View style={messageStyle.middle}>
					{
						type == 'player' ? 
							this._renderPlayer()
						:
							this._renderItem()
					}
				</View>
				 {this.props.stock && <View style={messageStyle.line}><View style={{width: width,borderTopWidth: 1,borderColor: colors.whiteTwo, }} /></View>}
				<View style={[messageStyle.bottom , this.props.stock ? {alignItems: 'center',} : '']}>
					{this.props.buttons && <View style={messageStyle.cancelButton}>
						<TiltButton 
				            text={"CANCEL"}
				            borderColor={colors.white}
				            backgroundColor={colors.whiteBg}
				            onPress={()=>{}}
				        />
			        </View>}
			        {this.props.buttons && <View style={messageStyle.useButton}>
				        {this.props.buy ?
					        <TiltButton 
					            text={this.props.buy}
					            borderColor={colors.sunnyYellow}
					            backgroundColor={colors.sunnyYellowBg}
					            money
					            onPress={()=>{}}
					        />
					    :
					    	<TiltButton 
					            text={"USE"}
					            borderColor={colors.neonBlue}
					            backgroundColor={colors.neonBlueBg}
					            onPress={()=>{}}
					        />
						}	
			        </View>}
			        {this.props.stock && 
		        	<View style={messageStyle.stockWrapper}>
			        	<Text style={messageStyle.stockText}>{this.props.stock}</Text>
					</View>}
				</View>

				
			</View>
		)
	}

}


