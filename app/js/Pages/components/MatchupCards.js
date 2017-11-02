import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

import { matchupCardsStyle, colors } from "../styles";
import LinearGradient from 'react-native-linear-gradient';
import TiltButton from './TiltButton';
import GridCellWrapper from './GridCellWrapper';
import Pie from 'react-native-pie'

export default class MatchupCards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			won: 2,
			activeTab: 0,
			showDetails: false,
		}
		this._renderInfoBet = this._renderInfoBet.bind(this);
		this._renderHeads = this._renderHeads.bind(this);
		this._renderButtons = this._renderButtons.bind(this);
		this._renderScoreBars = this._renderScoreBars.bind(this);

		this._renderDetails = this._renderDetails.bind(this);
		this._renderQuarterback = this._renderQuarterback.bind(this);
	}
	_renderInfoBet(){
		return (
			<View style={matchupCardsStyle.betInfoWrapper}>
				<View style={matchupCardsStyle.weekInfo}>
					<Text style={matchupCardsStyle.betInfoTitle}>{this.props.week}</Text>
					<Text style={matchupCardsStyle.betInfoDescription}>WEEK</Text>
				</View>
				<View style={matchupCardsStyle.betInfo}>
					<View style={{flexDirection: 'row', alignItems: 'center'}}>
						<Image style={{width: 10, height: 10, marginRight: 3 }} source={require('../../../assets/circle-bet.png')}/>
						<Text style={matchupCardsStyle.betInfoTitle}>{this.props.bet}</Text>
					</View>
					<Text style={matchupCardsStyle.betInfoDescription}>BET</Text>
				</View>
			</View>
		)
	}
	_renderHeads(){

		return (
			<View style={matchupCardsStyle.headsWrapper}>
			
				<View style={matchupCardsStyle.headsLeftWrapper}>
					<View style={matchupCardsStyle.headsLeft}>
						{this.state.won == 1 && <View style={matchupCardsStyle.won}>
							<Text style={matchupCardsStyle.wonText}>WON!</Text>
						</View>}
						<Image source={this.props.leftHead} style={matchupCardsStyle.head}/>
						<Text style={matchupCardsStyle.headNameText}>{this.props.leftName}</Text>
					</View>
				</View>
				<View style={matchupCardsStyle.dotdotWrapper}>
					<View style={{alignItems: 'center',	justifyContent: 'center'}}>
						<TouchableOpacity style={matchupCardsStyle.dotButton} onPress={()=>{this.setState({showDetails: !this.state.showDetails})}}>
							<View style={matchupCardsStyle.dotdot}>
								<Image source={require('../../../assets/dotdot.png')} />
							</View>
						</TouchableOpacity>
						{this.props.gameStatus == 'live' && <View>
							<Text style={matchupCardsStyle.gameStatusText}>{this.props.gameTime ? this.props.gameTime : 'LIVE'}</Text>
						</View>}
					</View>
				</View>
				<View style={matchupCardsStyle.headsRightWrapper}>
					<View style={matchupCardsStyle.headsRight}>
						{this.state.won == 2 && <View style={matchupCardsStyle.won}>
							<Text style={matchupCardsStyle.wonText}>WON!</Text>
						</View>}
						<Image source={this.props.rightHead} style={matchupCardsStyle.head}/>
						<Text style={matchupCardsStyle.headNameText}>{this.props.rightName}</Text>
					</View>
				</View>
			</View>
		)
	}

	_renderButtons(){
		return (
			<View style={matchupCardsStyle.buttonWrapper}>
				<View style={matchupCardsStyle.buttonLeftWrapper}>
					<View style={matchupCardsStyle.buttonLeft}>
						<TiltButton 
							text={"DECLINE"}
							borderColor={colors.blueyGrey}
							backgroundColor={colors.blueyGreyBg}
							onPress={()=>{}}
						/>
					</View>
				</View>
				<View style={matchupCardsStyle.buttonRightWrapper}>
					<View style={matchupCardsStyle.buttonRight}>
						<TiltButton 
							text={"ACCEPT"}
							borderColor={colors.neonBlue}
							backgroundColor={colors.neonBlueBg}
							onPress={()=>{}}
						/>
					</View>
				</View>
			</View>
		)
	}

	_renderScoreBars(){
		let rightComplete, leftComplete;
		if(this.props.scoreLeft && this.props.scoreRight){
			let max = Math.max(this.props.scoreLeft, this.props.scoreRight)
			let multiplyBy = parseInt(max).toString().length;
			let number = 1; 
			for(let i = 1; i < multiplyBy ; i++){number *= 10}
			let maxValue = Math.ceil(max / number) * number;

			leftComplete = parseInt(( this.props.scoreLeft / maxValue ) * 100) + '%'; 
			rightComplete = parseInt(( this.props.scoreRight / maxValue ) * 100) + '%'; 
		}
		
		return (
			<View style={matchupCardsStyle.scoreBarsWrapper}>
				<View style={matchupCardsStyle.barLeft}>
					<View style={matchupCardsStyle.scoreTextWrapper}>
						<Text style={matchupCardsStyle.scoreText}>{this.props.scoreLeft ? this.props.scoreLeft : '-'}</Text>
					</View>
					<View style={[matchupCardsStyle.progressBar,{alignItems: 'flex-end'}]}>
						<View style={[matchupCardsStyle.progressBarActive, {width: leftComplete}]} />
					</View>
				</View>
				<View style={matchupCardsStyle.barRight}>
					<View style={matchupCardsStyle.scoreTextWrapper}>
						<Text style={matchupCardsStyle.scoreText}>{this.props.scoreRight ? this.props.scoreRight : '-'}</Text>
					</View>
					<View style={matchupCardsStyle.progressBar}>
						<View style={[matchupCardsStyle.progressBarActive, {width: rightComplete}]} />

					</View>
				</View>
			</View>
		)
	}
	_renderDetails(){
		return (
			<View style={matchupCardsStyle.detailsWrapper}>
				<Tabbar
					onChange={ (id)=>{this.setState({activeTab: id})} }
					activeTab={this.state.activeTab}
				>
					<Tab tabTitle="QUARTERBACK">
						{this._renderQuarterback()}
					</Tab>
					<Tab tabTitle="RUNNING BACK">
						<Text>TEST1</Text>
					</Tab>
					<Tab tabTitle="WIDE RECEIVER">
						<Text>TEST2</Text>
					</Tab>
				</Tabbar>
			</View>
		)
	}
	_renderQuarterback(){
		return (
			<View style={matchupCardsStyle.quarterWrapper}>
				<View style={matchupCardsStyle.quarterLeft}>
					<Text style={matchupCardsStyle.detailsUserName}>D.CARR</Text>
					<Text style={matchupCardsStyle.detailsValue}>65.3</Text>
					<Text style={matchupCardsStyle.detailsTime}>24mins</Text>

					<Image source={require('../../../assets/nerfs/ball_chain.png')} style={matchupCardsStyle.detailsImage}/>

					<PowerUp
						image={require('../../../assets/buffs/bazooka.png')}
						powerupName={"bazooka"}
						powerupDamage={'34.2'}
						type="buff"
					/>
					<PowerUp
						image={require('../../../assets/nerfs/ball_chain.png')}
						powerupName={"ball_chain"}
						powerupDamage={'6.2'}
						type="nerf"
					/>
				</View>
				<View style={matchupCardsStyle.quarterRight}>
					<Text style={matchupCardsStyle.detailsUserName}>D.CARR</Text>
					<Text style={matchupCardsStyle.detailsValue}>65.3</Text>
					<Text style={matchupCardsStyle.detailsTime}>24mins</Text>

					<Image source={require('../../../assets/nerfs/ball_chain.png')} style={matchupCardsStyle.detailsImage}/>

					<PowerUp
						image={require('../../../assets/buffs/tank.png')}
						powerupName={"tank"}
						powerupDamage={'34.2'}
						type="buff"
					/>
					<PowerUp
						image={require('../../../assets/nerfs/fish.png')}
						powerupName={"fish"}
						powerupDamage={'4.2'}
						type="nerf"
					/>
				</View>
			</View>
		)
	}
	render(){
		return (
			<View style={matchupCardsStyle.container}>
				<LinearGradient colors={[colors.transparent, colors.neonBlueBg]} style={matchupCardsStyle.linearGradient}>
					<View style={matchupCardsStyle.matchupWrapper}>
						{this._renderHeads()}

						{this._renderScoreBars()}

						{this.state.showDetails && this._renderDetails()}
						{this._renderInfoBet()}

						{this._renderButtons()}



					</View>
				</LinearGradient>
			</View>
		)
	}
}

class PowerUp extends React.Component{
	render(){
		return (
			<View style={matchupCardsStyle.powerupWrapper}>
				<Text style={matchupCardsStyle.powerupName}>{this.props.powerupName}</Text>
				<Text style={[matchupCardsStyle.powerupValue,this.props.type == 'buff' ? {color: colors.neonBlue} : {color: colors.watermelon}]}>{(this.props.type == 'buff') ? '+':'-'}{this.props.powerupDamage}</Text>
				<Image source={this.props.image} style={matchupCardsStyle.detailsImage}/>
			</View>
		)
	}
}

class Tabbar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			tabTitle: null,
		}
	}
	componentDidMount(){
		if(!this.props.children) return;
		let children = this.props.children;
		console.log("children",children);

		let tabTitle = [];

		children.map((tab) => {
			tabTitle.push(tab.props.tabTitle)
		})
		this.setState({
			tabTitle,
		})
	}

	render(){
		return (
			<View style={matchupCardsStyle.tabContainer}>
				<View style={matchupCardsStyle.tabWrapper}>
					<View style={matchupCardsStyle.tabs}>
						{this.state.tabTitle ? 
							this.state.tabTitle.map((title, key)=>{
								return( 
									<TouchableOpacity style={matchupCardsStyle.tabButton} key={key} onPress={() => this.props.onChange(key)}>
										<Image source={require('../../../assets/placeholder.png')} style={{flex: 1, height: 100}}/>
										<Text style={[matchupCardsStyle.tabText, (this.props.activeTab == key) ? matchupCardsStyle.tabActiveText : '' ]}>{title}</Text>
									</TouchableOpacity>
								)
							})
						:<View/>}
					</View>
				</View>
				<View>
					{this.props.children[this.props.activeTab]}
				</View>
			</View>
		)
	}

}

class Tab extends React.Component{ 
	render(){
		return (
			<View style={matchupCardsStyle.tabContent}>
				{this.props.children}
			</View>
		)
	}
}
