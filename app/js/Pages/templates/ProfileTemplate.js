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

import UserProfileHeader from "../../Pages/components/UserProfileHeader";

import { colors, storeTemplateStyle } from "../../Pages/styles";

export default class ProfileTemplate extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			activeTab: 0,
			activeBigTab: 0,
		}
		this._renderBuffsTab = this._renderBuffsTab.bind(this);
		this._renderNerfsTab = this._renderNerfsTab.bind(this);
	}

	componentWillMount() {
		// check if self
	}

	_renderBuffsTab(){
		return (
			<View>
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

				<View style={{marginBottom: 10}}>
					<GridSection
						title={"Title"}
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

		const { credits, displayName, email, exp, level, lost, photoURL, streak, totalGamesPlayed, uid, username, won } = this.props.user

		return(
			<View style={{backgroundColor: colors.marine}}>

				<Header 
					leftIcon={require('../../../assets/back.png')}
					// logo={require('../../../assets/logo.png')}
					title={'displayName'}
					subtitle={"sub"}
					// circle={"4"}
				/>


				<ScrollView style={[storeTemplateStyle.container,{minHeight: height - 56}]}>
					
					<View style={{paddingTop: 11}}>
						<UserProfileHeader
							avatar={{uri: 'http://via.placeholder.com/100x100'}}

							wins={'2,478'}
							followers={'2,478'}
							following={'2,478'}

							button1={"CHALLENGE"}
							onButton1={()=>{}}

							graph
							actualLevel={'7629'}
							totalLevel={'10000'}
							user={'ROOKIE'}
							gold={'34.6K'}
							onAdd={()=>{}}

							button2={"UNFOLLOW"}
							onButton2={()=>{}}
							//button2={"FOLLOW"}
							>
						</UserProfileHeader>
					</View>

					<View style={{paddingLeft: 10, paddingRight: 10}}>
						<SmallTabbar
							activeTab={this.state.activeTab}
							onChange={(id)=>{this.setState({activeTab: id})}}
							// filter={require('../../../assets/filter.png')}
							// onFilter={()=>{}}
						>	

							<Tab 
								tabTitle={"BUFFS"}
							>
								{this._renderBuffsTab()}
							</Tab>	

							<Tab 
								tabTitle={"NERFS"}
							>
								{this._renderNerfsTab()}
							</Tab>	

							
											
						</SmallTabbar>
					</View>
					
					
				</ScrollView>
			</View>
		)
	}
}