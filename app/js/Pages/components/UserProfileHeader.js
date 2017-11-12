import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import { userProfileHeaderStyle, colors } from "../styles";
import TiltButton from './TiltButton';
import LinearGradient from 'react-native-linear-gradient';
// import { SmoothLine } from 'react-native-pathjs-charts'
import SmoothLineChart from './SmoothLineChart/SmoothLineChart'
export default class UserProfileHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
		this._renderBottom = this._renderBottom.bind(this);
	}

	_renderBottom(){
		if(this.props.graph){

			levelProgress = parseInt(( parseInt(this.props.actualLevel) / parseInt(this.props.totalLevel) ) * 100);
			levelProgress = levelProgress + '%';

			let width = Dimensions.get('window').width;

			let data = [
			    [{
			      "x": 0,
			      "y": 5
			    }, {
			      "x": 1,
			      "y": 14
			    }, {
			      "x": 2,
			      "y": 22
			    }, {
			      "x": 3,
			      "y": 27
			    }, {
			      "x": 4,
			      "y": 29
			    }, {
			      "x": 5,
			      "y": 28
			    }, {
			      "x": 6,
			      "y": 28
			    }, {
			      "x": 7,
			      "y": 30
			    }, {
			      "x": 8,
			      "y": 33
			    }, {
			      "x": 9,
			      "y": 30
			    }, {
			      "x": 10,
			      "y": 25
			    }]
			  ]


			  let options = {
			  	min: 0,
      			max: 35,
			    width: width - 30,
			    height: 35,
			    color: '#FFFFFF',
			    // margin:{
			    //   top: 20,
			    // },

			    axisX: {
			      showAxis: false,
			      showLines: false,
			      showLabels: false,
			      showTicks: false,
			      zeroAxis: false,
			      orient: 'bottom',
			      label: {
			        fontFamily: 'Arial',
			        fontSize: 14,
			        fontWeight: true,
			        fill: 'pink'
			      }
			    },
			    axisY: {
			      showAxis: false,
			      showLines: false,
			      showLabels: false,
			      showTicks: false,
			      zeroAxis: false,
			      orient: 'left',
			      label: {
			        fontFamily: 'Arial',
			        fontSize: 14,
			        fontWeight: true,
			        fill: 'pink'
			      }
			    }
			}

			return (
				<View style={userProfileHeaderStyle.level}>

					<ProgressLine 
						user={this.props.user} // this is level, not user
						actualLevel={this.props.actualLevel}
						totalLevel={this.props.totalLevel}
					/>
					
					<View style={{flexDirection: 'row', paddingTop: 22, paddingBottom: 22}}>

						<View style={userProfileHeaderStyle.gold}>
							<YellowCircle />
							<Text style={userProfileHeaderStyle.goldText}>{this.props.gold}</Text>
							<Text style={userProfileHeaderStyle.goldSubText}>GOLD</Text>
						</View>

						<CircleButton 
							text={"+"}
							onPress={this.props.onAdd}
						/>

					</View>

					<SmoothLineChart 
			      		data={data} 
			      		options={options}

			      		xKey='x' 
			      		yKey='y' 
			      	/>
				</View>
			)
		}
		else if(this.props.button1 && this.props.button2) {
			return (
				<View style={userProfileHeaderStyle.buttons}>
					<View style={userProfileHeaderStyle.buttonsWrapper}>
						<TiltButton 
							text={this.props.button1}
							borderColor={colors.white}
							backgroundColor={colors.whiteBg}
							onPress={this.props.onButton1}
						/>
					</View>
					<View style={userProfileHeaderStyle.buttonsWrapper}>
						<TiltButton 
							text={this.props.button2}
							borderColor={colors.neonBlue}
							backgroundColor={colors.neonBlueBg}
							onPress={this.props.onButton2}
						/>
					</View>
				</View>
			)
		}
		else if(this.props.button1){
			return (
				<View style={userProfileHeaderStyle.buttons}>
					<View style={userProfileHeaderStyle.buttonsWrapper}>
						<TiltButton 
							text={this.props.button1}
							borderColor={colors.neonBlue}
							backgroundColor={colors.neonBlueBg}
							onPress={this.props.onButton1}
						/>
					</View>
				</View>
			)
		}
	}
	
	render(){
		let {wins, followers, following, avatar} = this.props;
		return (
			<LinearGradient colors={[colors.transparent, colors.darkGreyBlueBg]} style={{flex: 1,}}>
				<View style={userProfileHeaderStyle.container}>
					
					<View style={userProfileHeaderStyle.userStats}>
						<View style={userProfileHeaderStyle.avatarWrapper}>
							<Image source={avatar} style={userProfileHeaderStyle.avatar} />
						</View>
						<View style={userProfileHeaderStyle.stats}>
							<View style={userProfileHeaderStyle.wins}>
								<Text style={userProfileHeaderStyle.statsText}>{wins}</Text>
								<Text style={userProfileHeaderStyle.statsTitle}>WINS</Text>
							</View>
							<View style={userProfileHeaderStyle.followers}>
								<Text style={userProfileHeaderStyle.statsText}>{followers}</Text>
								<Text style={userProfileHeaderStyle.statsTitle}>FOLLOWERS</Text>
							</View>
							<View style={userProfileHeaderStyle.following}>
								<Text style={userProfileHeaderStyle.statsText}>{following}</Text>
								<Text style={userProfileHeaderStyle.statsTitle}>FOLLOWING</Text>
							</View>
						</View>
						<View style={{flex:1}}/>
					</View>
					<View style={userProfileHeaderStyle.bottomPart}>
						{this._renderBottom()}
					</View>
					
				</View>
			</LinearGradient>
		)
	}
}

class ProgressLine extends React.Component {
	render(){
		return (
			<View>
				<View style={userProfileHeaderStyle.levelTextWrapper}>
					<Text style={userProfileHeaderStyle.levelText}>{this.props.user}</Text>
					<Text style={userProfileHeaderStyle.levelValue}>{this.props.actualLevel}/{this.props.totalLevel}</Text>
				</View>
				<View style={userProfileHeaderStyle.levelProgress}><View style={[userProfileHeaderStyle.levelProgressComplete, {width: levelProgress} ]}/></View>
			</View>
		)
	}
}

// TODO adapt as global component
class CircleButton extends React.Component {
	render(){
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<LinearGradient style={{flex: 1, borderRadius: 28/2}} colors={[colors.transparent, colors.neonBlueBg]}>
					<View style={userProfileHeaderStyle.circle}>
						<Text style={userProfileHeaderStyle.circleText}>{this.props.text}</Text>
					</View>
				</LinearGradient>
			</TouchableOpacity>
		)
	}
}

class YellowCircle extends React.Component {
	render(){
		return (
			<View style={{width: 16, height: 16, borderColor: colors.sunnyYellow, borderWidth: 2, borderRadius: 16/2}}>
				<LinearGradient style={{flex: 1}} colors={[colors.transparent, colors.sunnyYellowBg]}></LinearGradient>
			</View>
		)
	}
}
