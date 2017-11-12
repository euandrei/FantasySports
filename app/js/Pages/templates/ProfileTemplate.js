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

import Header from "../../Pages/components/Header";
import GridSection from "../../Pages/components/GridSection";
import GridCellWrapper from "../../Pages/components/GridCellWrapper";

import SmallTabbar from "../../Pages/components/SmallTabbar";
import Tab from "../../Pages/components/Tab";

import NoItem from "../../Pages/components/NoItem";

import ProfileHeader from "../../Pages/components/UserProfileHeader";

import { colors, storeTemplateStyle } from "../../Pages/styles";

/*
	user = {
	  "credits": 17000,
	  "exp": 0,
	  "level": 0,
	  "lost": 0,
	  "streak": 0,
	  "totalGamesPlayed": 0,
	  "uid": "9XgdUCdmhcPpAbnnIPa1q8mAtGu1",
	  "username": "darkd",
	  "won": 0,
	  "displayName": "David Uy",
	  "email": "daviduy8@gmail.com",
	  "photoURL": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"
	}

	Users will need to gain experience to level up. 
	Meaning that in order to get to level 5 status, you need to gain 50 experience points.

	Levels are: Rookie, Star, All-Star, Superstar, Legend (to start and we will add more later)
*/

export default class ProfileTemplate extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			self: false,

			activeTab: 0,
			activeBigTab: 0,
		}
		this._renderBuffsTab = this._renderBuffsTab.bind(this);
		this._renderNerfsTab = this._renderNerfsTab.bind(this);
	}

	componentWillMount() {
		// check if self

		if (this.props.user.uid == '9XgdUCdmhcPpAbnnIPa1q8mAtGu1') {
			this.setState({self: true})
		}
	}

	getLevelDetails(exp, level) {
		const levelNames = ['Rookie', 'Star', 'All-Star', 'Superstar', 'Legend']
		const levelThreshold = 10

		return {
			levelName: levelNames[level],
			goalExp: exp == 0 ? levelThreshold : Math.ceil(exp / levelThreshold) * levelThreshold,
		}
	}

	_renderBuffsTab(){
		return (
			<View>
				<GridSection
					title={"quarterback buffs"}
					titlePosition={"center"}
					line
				>
					{[1,1,1].map((value, i) => {
						return (
							<GridCellWrapper
								key={i}
								bgColor={colors.watermelonBg}
								title={"Test"}
								image={require('../../../assets/nerfs/bear_trap.png')}
								type={"buff"}
							/>
						)
					})}
				</GridSection>

				<View style={{marginBottom: 10}}>
					<GridSection
						title={"running back buffs"}
						titlePosition={"center"}
						line

						empty
					>
						<NoItem 
							message={"No buffs availablle…"}
							buttonText={"SHOP"}
							onPress={()=>{}}
						/>
					</GridSection>
				</View>

				<GridSection
					title={"wide receiver buffs"}
					titlePosition={"center"}
					line
				>
					{[1,1,1].map((value, i) => {
						return (
							<GridCellWrapper
								key={i}
								bgColor={colors.watermelonBg}
								title={"Test"}
								image={require('../../../assets/nerfs/bear_trap.png')}
								type={"buff"}
							/>
						)
					})}
				</GridSection>

			</View>
		)
	}

	_renderNerfsTab(){
		return (
			<GridSection
				title={"Title"}
				titlePosition={"center"}
				line
			>
				{[1,1,1].map((value, i) => {
					return (
						<GridCellWrapper
							key={i}
							bgColor={colors.watermelonBg}
							title={"Test"}
							image={require('../../../assets/nerfs/bear_trap.png')}
							type={"buff"}
						/>
					)
				})}
			</GridSection>
		)
	}

	render(){
		let height = Dimensions.get('window').height;

		const { credits, displayName, email, exp, level, lost, photoURL, streak, totalGamesPlayed, uid, username, won,
			followers, following // TODO are not in api
		} = this.props.user

		// progress line extra
		const { levelName, goalExp } = this.getLevelDetails(exp, level)

		return(
			<View style={{backgroundColor: colors.marine}}>

				<Header 
					leftIcon={require('../../../assets/back.png')}
					// logo={require('../../../assets/logo.png')}
					title={displayName}
					subtitle={!this.state.self && levelName}
					// circle={"4"}
				/>

				<ScrollView style={[storeTemplateStyle.container,{minHeight: height - 56}]}>
					
					<View style={{paddingTop: 11}}>
						<ProfileHeader
							self={this.state.self}

							avatar={{uri: photoURL}}

							stats={{won, followers, following}}

							progress={{levelName, goalExp, exp, credits}}

							button1={"CHALLENGE"}
							onButton1={()=>{}}

							onAdd={()=>{}}

							button2={"UNFOLLOW"}
							onButton2={()=>{}}
							//button2={"FOLLOW"}
							>
						</ProfileHeader>
					</View>

					<View style={{paddingLeft: 10, paddingRight: 10, paddingTop: 20}}>
						<SmallTabbar
							activeTab={this.state.activeTab}
							onChange={(id)=>{this.setState({activeTab: id})}}
							// filter={require('../../../assets/filter.png')}
							// onFilter={()=>{}}
						>	
							<Tab tabTitle={"BUFFS"}>
								{this._renderBuffsTab()}
							</Tab>	

							<Tab tabTitle={"NERFS"}>
								{this._renderNerfsTab()}
							</Tab>			
						</SmallTabbar>
					</View>
					
					
				</ScrollView>
			</View>
		)
	}
}