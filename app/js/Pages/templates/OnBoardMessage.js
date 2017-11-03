import React from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    View,
    Platform,
    ScrollView,
    TextInput
} from 'react-native';

import TiltButton from "../components/TiltButton";
import { colors, onBoardMessageStyle } from "../styles";

export default class OnBoardMessage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}
	render(){
		return(
			
			<View style={onBoardMessageStyle.container}>

				<View style={onBoardMessageStyle.topPart}>
					{this.props.versus ?
						<Versus
							versus={this.props.versus}
						/>
					:
						<View style={{marginTop: -30}}>
							<View style={onBoardMessageStyle.title}>
								{this.props.week && <Text style={onBoardMessageStyle.titleWeek}>WEEK {this.props.week}</Text>}
								{this.props.title && <Text style={onBoardMessageStyle.titleText}>{this.props.title.toUpperCase()}</Text>}
							</View>
							<View style={onBoardMessageStyle.titleValue}>
								{this.props.titleValue && <Text style={[onBoardMessageStyle.titleValueText, this.props.win ? {color: colors.sunnyYellow} : {color: colors.watermelon}] }>{this.props.win ? '+' : '-'}{this.props.titleValue.toUpperCase()}</Text>}
							</View>
						</View>
					}
				</View>
			
				<View style={onBoardMessageStyle.bottomPart}>
					<View style={onBoardMessageStyle.bottomTextView}>
						{this.props.bottomTitle && <Text style={onBoardMessageStyle.bottomTitle}>{this.props.bottomTitle.toUpperCase()}</Text>}
						{this.props.bottomText && <Text style={onBoardMessageStyle.bottomText}>{this.props.bottomText.toUpperCase()}</Text>}
					</View>
					<View style={[onBoardMessageStyle.buttonView]}>
						{this.props.buttonText &&
							<View style={[onBoardMessageStyle.buttonWrapper]}>
								<TiltButton
									text={this.props.buttonText.toUpperCase()}
									borderColor={colors.neonBlue}
									backgroundColor={colors.neonBlueBg}
									onPress={this.props.onPress}
								/>
								{this.props.tutorial && this.props.overButton && <View style={{height:30,width:30,position:'absolute',top:-10,right:-15,borderRadius:20,backgroundColor:'rgba(255,244,33,.5)'}}/>}
							</View>
						}
					</View>
				</View>
					
				<View style={onBoardMessageStyle.skip}>
					{this.props.skip && 
						<TouchableOpacity onPress={this.props.onSkip}>
							<Text style={onBoardMessageStyle.skipText}>SKIP</Text>
						</TouchableOpacity>
					}
				</View>
			</View>
		)
	}
}

class Versus extends React.Component{
	render(){
		let enemyImage = "../../../assets/heads/h_red_right.png"
		return(
				<View style={onBoardMessageStyle.versusWrapper}>
					<View style={onBoardMessageStyle.absoluteVersus}>
					  <Text style={onBoardMessageStyle.vsText}>VS</Text>
					</View>

					<View style={onBoardMessageStyle.versusLeft}>
						<Image source={require('../../../assets/heads/h_gry_left.png')} style={onBoardMessageStyle.versusImage} />
						<Text style={onBoardMessageStyle.nameText}>YOU</Text>
					</View>	
					<View style={onBoardMessageStyle.versusRight}>
						<Image source={this.props.versus.image} style={onBoardMessageStyle.versusImage} />
						<Text style={onBoardMessageStyle.nameText}>{this.props.versus.name}</Text>
					</View>
					
				</View>
			)
	}
}
