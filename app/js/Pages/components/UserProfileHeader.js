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

	_renderCharts() {
		// Progress
		const { levelName, exp, goalExp, credits } = this.props.progress

		if (this.props.progress) {
			return (
				<View style={userProfileHeaderStyle.level}>

					<ProgressLine 
						levelName={levelName}
						exp={exp}
						goalExp={goalExp}
					/>

					<Graph 
						credits={credits}
						onAdd={this.props.onAdd}
					/>
					
				</View>
			)
		}
	}

	_renderButtons() {

		if(this.props.button1 && this.props.button2) {
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
		const { avatar, self } = this.props;

		const { won, followers, following } = this.props.stats

		return (
			<LinearGradient colors={[colors.transparent, colors.darkGreyBlueBg]} style={{flex: 1,}}>
				<View style={userProfileHeaderStyle.container}>
					
					<View style={userProfileHeaderStyle.userStats}>
						<View style={userProfileHeaderStyle.avatarWrapper}>
							<Image source={avatar} style={userProfileHeaderStyle.avatar} />
						</View>
						<View style={userProfileHeaderStyle.stats}>
							<View style={userProfileHeaderStyle.wins}>
								<Text style={userProfileHeaderStyle.statsText}>{won}</Text>
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
						{self ? this._renderCharts() : this._renderButtons()}
					</View>
					
				</View>
			</LinearGradient>
		)
	}
}

class ProgressLine extends React.Component {
	render() {

		const { levelName, exp, goalExp } = this.props

		let levelProgress = parseInt(10 - (goalExp - exp)) / parseInt(10) * 100
		levelProgress = levelProgress + '%';

		return (
			<View>
				<View style={userProfileHeaderStyle.levelTextWrapper}>
					<Text style={userProfileHeaderStyle.levelText}>{levelName.toUpperCase()}</Text>
					<Text style={userProfileHeaderStyle.levelValue}>{exp}/{goalExp}</Text>
				</View>

				<View style={userProfileHeaderStyle.levelProgress}>
					<View style={[userProfileHeaderStyle.levelProgressComplete, {width: levelProgress} ]} />
				</View>
			</View>
		)
	}
}	

// TODO adapt as global component
class CircleButton extends React.Component {
	render() {
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
	render() {
		return (
			<View style={{width: 16, height: 16, borderColor: colors.sunnyYellow, borderWidth: 2, borderRadius: 16/2}}>
				<LinearGradient style={{flex: 1}} colors={[colors.transparent, colors.sunnyYellowBg]}></LinearGradient>
			</View>
		)
	}
}

class Graph extends React.Component {

	abbreviateNum(num) {
	   if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
	   if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
	   return num;
	}

	render() {

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

		const {credits} = this.props

		return (
			<View>
				<View style={{flexDirection: 'row', paddingTop: 22, paddingBottom: 22}}>

					<View style={userProfileHeaderStyle.gold}>
						<YellowCircle />
						<Text style={userProfileHeaderStyle.goldText}>{this.abbreviateNum(credits)}</Text>
						<Text style={userProfileHeaderStyle.goldSubText}>GOLD</Text>
					</View>

					<CircleButton 
						text={"+"}
						onSkip={() => {
							// TODO and open gold tab
							// Actions.Store()
						}}
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
}
