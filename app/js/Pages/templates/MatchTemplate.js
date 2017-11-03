import React from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    View,
    Platform,
    ScrollView,
    Dimensions
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Header from "../../Pages/components/Header";
import MatchHeader from "../../Pages/components/MatchHeader";
import SmallTabbar from "../../Pages/components/SmallTabbar";
import Tab from "../../Pages/components/Tab";
import BigTabbar from "../../Pages/components/BigTabbar";
import MatchupCards from "../../Pages/components/MatchupCards";

import { colors, matchTemplateStyle } from "../../Pages/styles";

export default class MatchTemplate extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			activeTab: 3,
			activeBigTab: 0,
		}
		this._renderLiveTab = this._renderLiveTab.bind(this);
		this._renderOpenTab = this._renderOpenTab.bind(this);
		this._renderScheduledTab = this._renderScheduledTab.bind(this);
		this._renderCompletedTab = this._renderCompletedTab.bind(this);
	}
	_renderLiveTab(){
		return (
			<BigTabbar 
				activeTab={this.state.activeBigTab}
				onChange={(id)=>{this.setState({activeBigTab: id})}}
			>
				<Tab 
					tabTitle={"PUBLIC"}
				>
					<MatchupCards 
						leftHead={require('../../../assets/heads/h_gry_left.png')}
						leftName={"You"}

						gameStatus={'live'}

						rightHead={require('../../../assets/heads/h_gry_right.png')}
						rightName={"BilboLive"}

						week={14}
						bet={'4,000'}

					/>
				</Tab>
				<Tab 
					tabTitle={"PRIVATE"}
				>
					<MatchupCards 
						leftHead={require('../../../assets/heads/h_gry_left.png')}
						leftName={"You"}

						won={1}

						rightHead={require('../../../assets/heads/h_gry_right.png')}
						rightName={"BilboLive"}

						week={14}
						bet={'4,000'}

						scoreLeft={'124.2'}
						scoreRight={'83.8'}
					/>
				</Tab>

			</BigTabbar>
		)
	}
	_renderOpenTab(){
		return (
			<BigTabbar 
				activeTab={this.state.activeBigTab}
				onChange={(id)=>{this.setState({activeBigTab: id})}}
			>
				<Tab 
					tabTitle={"PUBLIC"}
				>
					<MatchupCards 
						leftHead={require('../../../assets/heads/h_gry_left.png')}
						leftName={"You"}

						won={1}

						rightHead={require('../../../assets/heads/h_gry_right.png')}
						rightName={"BilboOpen"}

						week={14}
						bet={'4,000'}

						scoreLeft={'124.2'}
						scoreRight={'83.8'}
					/>
				</Tab>
				<Tab 
					tabTitle={"PRIVATE"}
				>
					<MatchupCards 
						leftHead={require('../../../assets/heads/h_gry_left.png')}
						leftName={"You"}

						won={1}

						rightHead={require('../../../assets/heads/h_red_right.png')}
						rightName={"BilboOpen"}

						week={14}
						bet={'4,000'}

						scoreLeft={'124.2'}
						scoreRight={'83.8'}
					/>
				</Tab>

			</BigTabbar>
		)
	}
	_renderScheduledTab(){
		return (
			<BigTabbar 
				activeTab={this.state.activeBigTab}
				onChange={(id)=>{this.setState({activeBigTab: id})}}
			>
				<Tab 
					tabTitle={"PUBLIC"}
				>
					<MatchupCards 
						leftHead={require('../../../assets/heads/h_gry_left.png')}
						leftName={"You"}

						won={1}

						rightHead={require('../../../assets/heads/h_lav_right.png')}
						rightName={"BilboScheduled"}

						week={14}
						bet={'4,000'}

						scoreLeft={'124.2'}
						scoreRight={'83.8'}
					/>
				</Tab>
				<Tab 
					tabTitle={"PRIVATE"}
				>
					<MatchupCards 
						leftHead={require('../../../assets/heads/h_gry_left.png')}
						leftName={"You"}

						won={1}

						rightHead={require('../../../assets/heads/h_blu_right.png')}
						rightName={"BilboScheduled"}

						week={14}
						bet={'4,000'}

						scoreLeft={'124.2'}
						scoreRight={'83.8'}
					/>
				</Tab>

			</BigTabbar>
		)
	}
	_renderCompletedTab(){
		return (
			<BigTabbar 
				activeTab={this.state.activeBigTab}
				onChange={(id)=>{this.setState({activeBigTab: id})}}
			>
				<Tab 
					tabTitle={"PUBLIC"}
				>
					<MatchupCards 
						leftHead={require('../../../assets/heads/h_gry_left.png')}
						leftName={"You"}

						won={this.props.won}

						rightHead={this.props.enemyHead}
						rightName={this.props.enemyName}

						week={14}
						bet={this.props.bet}

						scoreLeft={this.props.myDmg}
						scoreRight={this.props.enemyDmg}
					/>

				</Tab>
				<Tab 
					tabTitle={"PRIVATE"}
				>
					<MatchupCards 
						leftHead={require('../../../assets/heads/h_gry_left.png')}
						leftName={"You"}

						won={1}

						rightHead={require('../../../assets/heads/h_blu_right.png')}
						rightName={"Bilbo2014"}

						week={14}
						bet={'4,000'}

						scoreLeft={'124.2'}
						scoreRight={'83.8'}
					/>
				</Tab>

			</BigTabbar>
		)
	}
	render(){
		let height = Dimensions.get('window').height;
		return(
			<ScrollView style={[matchTemplateStyle.container,{minHeight: height}]}>
				<LinearGradient colors={[colors.marine, colors.blueyGreyBg]} style={{flex: 1, padding: 10, minHeight: height}}>
					<View style={matchTemplateStyle.header}>
						<Header 
							leftIcon={require('../../../assets/trophy.png')}
							logo={require('../../../assets/logo.png')}
							circle={"4"}
						/>
					</View>
					<View style={matchTemplateStyle.matchHeader}>
						<MatchHeader 
							username={"USERNAME"}
							streak={8}
							gold={'34.6K'}
							level={"ROOKIE"}
							levelProgress={'50%'}
							freePackTimer={'4h 38mins...'}
							getFreePack={()=>{}}
						/>
					</View>
					<View>
						<SmallTabbar
							activeTab={this.state.activeTab}
							onChange={(id)=>{this.setState({activeTab: id})}}
							filter={require('../../../assets/filter.png')}
							onFilter={()=>{}}
						>
							<Tab 
								tabTitle={"Live"}
							>
								{this._renderLiveTab()}
							</Tab>

							<Tab 
								tabTitle={"Open"}
							>
								{this._renderOpenTab()}
							</Tab>	

							<Tab 
								tabTitle={"Scheduled"}
							>
								{this._renderScheduledTab()}
							</Tab>	

							<Tab 
								tabTitle={"Completed"}
							>
								{this._renderCompletedTab()}
							</Tab>					
						</SmallTabbar>
					</View>
				</LinearGradient>
			</ScrollView>
		)
	}
}
