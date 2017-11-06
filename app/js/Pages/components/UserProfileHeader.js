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
import { SmoothLine } from 'react-native-pathjs-charts'
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
      "x": -10,
      "y": -1000
    }, {
      "x": -9,
      "y": -729
    }, {
      "x": -8,
      "y": -512
    }, {
      "x": -7,
      "y": -343
    }, {
      "x": -6,
      "y": -216
    }, {
      "x": -5,
      "y": -125
    }, {
      "x": -4,
      "y": -64
    }, {
      "x": -3,
      "y": -27
    }, {
      "x": -2,
      "y": -8
    }, {
      "x": -1,
      "y": -1
    }, {
      "x": 0,
      "y": 0
    }, {
      "x": 1,
      "y": 1
    }, {
      "x": 2,
      "y": 8
    }, {
      "x": 3,
      "y": 27
    }, {
      "x": 4,
      "y": 64
    }, {
      "x": 5,
      "y": 125
    }, {
      "x": 6,
      "y": 216
    }, {
      "x": 7,
      "y": 343
    }, {
      "x": 8,
      "y": 512
    }, {
      "x": 9,
      "y": 729
    }, {
      "x": 10,
      "y": 1000
    }]
  ]

  let options = {
    width: width-30,
    height: 45,
    color: '#5B724A',
    margin:{
      top: 20,
    },
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
        fill: '#34495E'
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
        fill: '#34495E'
      }
    }
}
  
			return (
				<View style={userProfileHeaderStyle.level}>
					<View style={userProfileHeaderStyle.levelTextWrapper}>
						<Text style={userProfileHeaderStyle.levelText}>{this.props.user}</Text>
						<Text style={userProfileHeaderStyle.levelValue}>{this.props.actualLevel}/{this.props.totalLevel}</Text>
					</View>
					<View style={userProfileHeaderStyle.levelProgress}><View style={[userProfileHeaderStyle.levelProgressComplete, {width: levelProgress} ]}/></View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
						<View style={userProfileHeaderStyle.gold}>
							<Image source={require('../../../assets/circle-bet.png')} style={userProfileHeaderStyle.yellowCircle} />
							<Text style={userProfileHeaderStyle.goldText}>{this.props.gold} <Text style={userProfileHeaderStyle.goldSubText}>GOLD</Text></Text>
						</View>
						<TouchableOpacity style={{width:31, height: 31, marginLeft: 15}} onPress={this.props.onAdd}>
							<LinearGradient colors={[colors.transparent, colors.neonBlueBg]} style={{flex:1,borderRadius: 30}}>
								<View style={userProfileHeaderStyle.circle}>
									<Text style={userProfileHeaderStyle.circleText}> + </Text>
								</View>
							</LinearGradient>
						</TouchableOpacity>
					</View>
					<View style={{paddingBottom: 0,}}>
			      <SmoothLine data={data} options={options} xKey='x' yKey='y' />
            <View style={{position: 'absolute', height: 35, bottom: 0, left: -15, right: -15,}} >
              <LinearGradient colors={[colors.transparent, colors.darkGreyBlue]} style={{height: 40}}  >

              </LinearGradient>
            </View>
			    </View>
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
		let {wins, followers, following} = this.props;
		return (
			<LinearGradient colors={[colors.transparent, colors.darkGreyBlueBg]} style={{flex: 1,}}>
				<View style={userProfileHeaderStyle.container}>
					
					<View style={userProfileHeaderStyle.userStats}>
						<View style={userProfileHeaderStyle.avatarWrapper}>
							<Image source={require('../../../assets/placeholder.png')} style={userProfileHeaderStyle.avatar} />
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
