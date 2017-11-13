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

	// PROPS


	// ${BASE_PATH}/users/${SOME_USER_ID}
	// res.data.payload
	const user = {
	  "credits": 17000,
	  "exp": 22,
	  "level": 1,
	  "lost": 0,
	  "streak": 0,
	  "totalGamesPlayed": 0,
	  "uid": "9XgdUCdmhcPpAbnnIPa1q8mAtGu1",
	  "username": "darkd",
	  "won": 1324,
	  "displayName": "David Uy",
	  "email": "daviduy8@gmail.com",
	  "photoURL": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",

	  "followers": 3423, // TODO not in api
	  "following": 1231, // TODO not in api
	};

	// ${BASE_PATH}/items/inventory/${SOME_USER_ID_3}
	// res.data.payload
	const inventory = {
	  "buffs": [
	    {
	      "description": "Add more receptions! Give your player a Shopping Cart!",
	      "effect": 4,
	      "id": "-KyLMr-Ev9ztGq6Ucbvw",
	      "imageUrl": "",
	      "level": 2,
	      "name": "Shopping Cart",
	      "position": "WR",
	      "pts": 4,
	      "statistic": "REC",
	      "type": "shoppingcart",
	      "uid": "yvYimg5LnEQb2VWfwHeH8IOb4la2"
	    },
	    {
	      "description": "Add more running yards! Give your player a Tricycle!",
	      "effect": 10,
	      "id": "-KyLMr-Ev9ztGq6Ucbvy",
	      "imageUrl": "",
	      "level": 1,
	      "name": "Tricycle",
	      "position": "RB",
	      "pts": 1,
	      "statistic": "YRDS RUSH",
	      "type": "tricycle",
	      "uid": "yvYimg5LnEQb2VWfwHeH8IOb4la2"
	    },
	    {
	      "description": "Add more running yards! Give your player a Tricycle!",
	      "effect": 20,
	      "id": "-KyLMr-FOPUdi1NdqMAu",
	      "imageUrl": "",
	      "level": 1,
	      "name": "Tricycle",
	      "position": "RB",
	      "pts": 2,
	      "statistic": "YRDS RUSH",
	      "type": "tricycle",
	      "uid": "yvYimg5LnEQb2VWfwHeH8IOb4la2"
	    }
	  ],
	  "nerfs": [
	    {
	      "description": "Subtract rushing touchdown! Give your opponent Ball and Chain!",
	      "effect": 2,
	      "id": "-KyLMqybMRkUjZjlSBbM",
	      "imageUrl": "",
	      "level": 3,
	      "name": "Ball and Chain",
	      "position": "RB",
	      "pts": -12,
	      "statistic": "TD RUSH",
	      "type": "ballandchain",
	      "uid": "yvYimg5LnEQb2VWfwHeH8IOb4la2"
	    },
	    {
	      "description": "Subtract passing yards! Give your opponent a Fish!",
	      "effect": 75,
	      "id": "-KyLMr-Ev9ztGq6Ucbvx",
	      "imageUrl": "",
	      "level": 1,
	      "name": "Fish",
	      "position": "QB",
	      "pts": -3,
	      "statistic": "YRDS PASS",
	      "type": "fish",
	      "uid": "yvYimg5LnEQb2VWfwHeH8IOb4la2"
	    }
	  ]
	}

	DONE -> {
		Users will need to gain experience to level up. 
		Meaning that in order to get to level 5 status, you need to gain 50 experience points.

		Levels are: Rookie, Star, All-Star, Superstar, Legend (to start and we will add more later)
	}
*/

export default class ProfileTemplate extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			self: false,
			inventory: null,

			activeTab: 0,
			activeBigTab: 0,
		}
	}

	componentWillMount() {
		if (this.props.user.uid == '9XgdUCdmhcPpAbnnIPa1q8mAtGu1') {
			this.setState({self: true})
		}

		this.setState({inventory: this.getInventory()})
	}

	getInventory() {
		// TODO make api call

		// ${BASE_PATH}/items/inventory/${SOME_USER_ID_3}
		// res.data.payload
		const inventory = {
		  "buffs": [
		    {
		      "description": "Add more receptions! Give your player a Shopping Cart!",
		      "effect": 4,
		      "id": "-KyLMr-Ev9ztGq6Ucbvw",
		      "imageUrl": "",
		      "level": 2,
		      "name": "Shopping Cart",
		      "position": "WR",
		      "pts": 4,
		      "statistic": "REC",
		      "type": "shoppingcart",
		      "uid": "yvYimg5LnEQb2VWfwHeH8IOb4la2"
		    },
		    {
		      "description": "Add more running yards! Give your player a Tricycle!",
		      "effect": 10,
		      "id": "-KyLMr-Ev9ztGq6Ucbvy",
		      "imageUrl": "",
		      "level": 1,
		      "name": "Tricycle",
		      "position": "RB",
		      "pts": 1,
		      "statistic": "YRDS RUSH",
		      "type": "tricycle",
		      "uid": "yvYimg5LnEQb2VWfwHeH8IOb4la2"
		    },
		    {
		      "description": "Add more running yards! Give your player a Tricycle!",
		      "effect": 20,
		      "id": "-KyLMr-FOPUdi1NdqMAu",
		      "imageUrl": "",
		      "level": 1,
		      "name": "Tricycle",
		      "position": "RB",
		      "pts": 2,
		      "statistic": "YRDS RUSH",
		      "type": "tricycle",
		      "uid": "yvYimg5LnEQb2VWfwHeH8IOb4la2"
		    }
		  ],
		  "nerfs": [
		    {
		      "description": "Subtract rushing touchdown! Give your opponent Ball and Chain!",
		      "effect": 2,
		      "id": "-KyLMqybMRkUjZjlSBbM",
		      "imageUrl": "",
		      "level": 3,
		      "name": "Ball and Chain",
		      "position": "RB",
		      "pts": -12,
		      "statistic": "TD RUSH",
		      "type": "ballandchain",
		      "uid": "yvYimg5LnEQb2VWfwHeH8IOb4la2"
		    },
		    {
		      "description": "Subtract passing yards! Give your opponent a Fish!",
		      "effect": 75,
		      "id": "-KyLMr-Ev9ztGq6Ucbvx",
		      "imageUrl": "",
		      "level": 1,
		      "name": "Fish",
		      "position": "QB",
		      "pts": -3,
		      "statistic": "YRDS PASS",
		      "type": "fish",
		      "uid": "yvYimg5LnEQb2VWfwHeH8IOb4la2"
		    }
		  ]
		}

		return inventory
	}

	getLevelDetails(exp, level) {
		const levelNames = ['Rookie', 'Star', 'All-Star', 'Superstar', 'Legend']
		const levelThreshold = 10

		return {
			levelName: levelNames[level],
			goalExp: exp == 0 ? levelThreshold : Math.ceil(exp / levelThreshold) * levelThreshold,
		}
	}

	groupBy(items, prop) {
		return items.reduce((groups, item) => {
			let val = item[prop];
			groups[val] = groups[val] || [];
			groups[val].push(item);

			return groups;
		}, {});
	}

	_renderGridSection(title, items, type) {
		return (
			<GridSection
				title={title}
				titlePosition={"center"}
				line

				empty={items ? false : true}
			>
				{items ? (
					items.map((item) => {
						return (
							<GridCellWrapper
								key={item.id}
								bgColor={colors.watermelonBg}
								title={item.name}
								image={require('../../../assets/nerfs/bear_trap.png')}
								type={type.slice(0, -1)} // TODO should be plural
							/>
						)
					})
				) : (
					<NoItem 
						message={`No ${type} available...`}
						buttonText={"SHOP"}
						onPress={() => {}}
					/>
				)}
			</GridSection>
		)
	}

	_renderItems(type, items) {
		const { QB, RB, WR } = this.groupBy(items, 'position')

		return (
			<View>
				{this._renderGridSection(`quarterback ${type}`, QB, type)}
				{this._renderGridSection(`running back ${type}`, RB, type)}
				{this._renderGridSection(`wide receiver ${type}`, WR, type)}
			</View>
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
					circle={4}
				/>

				<ScrollView style={[storeTemplateStyle.container,{minHeight: height - 56}]}>
					
					<View style={{paddingTop: 11}}>
						<ProfileHeader
							self={this.state.self}

							avatar={{uri: photoURL}}
							stats={{won, followers, following}}
							progress={{levelName, goalExp, exp, credits}}

							// TODO:
							button1={"CHALLENGE"}
							onButton1={()=>{}}

							onAdd={()=>{}}

							button2={"UNFOLLOW"}
							onButton2={()=>{}}
						/>
					</View>

					<View style={{paddingLeft: 10, paddingRight: 10, paddingTop: 20}}>
						<SmallTabbar
							activeTab={this.state.activeTab}
							onChange={(id) => {this.setState({activeTab: id})}}
						>	
							{
								[
									{type: 'buffs', inventory: this.state.inventory.buffs},
									{type: 'nerfs', inventory: this.state.inventory.nerfs}
								]
								.map((tab) => {
									return (
										<Tab key={tab.type} tabTitle={tab.type}>
											{this._renderItems(tab.type, tab.inventory)}
										</Tab>
									)
								})
							}	
						</SmallTabbar>
					</View>

				</ScrollView>
			</View>
		)
	}
}