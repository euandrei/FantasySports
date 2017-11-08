import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView
} from 'react-native';

import SelectionTemplate from "../../templates/SelectionTemplate"
import ProgressLoader from "../../components/ProgressLoader.js"
export default class OnBoard3_3 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		let cards = [
			{
				name: "bazooka",
				image: require('../../../../assets/buffs/bazooka.png'),
			},
			{
				name: "butterfly net",
				image: require('../../../../assets/buffs/butterfly_net.png'),
			},
			{
				name: "lazer scope",
				image: require('../../../../assets/buffs/lazer_scope.png'),
				tutorial: "OnBoard3_4",
			},
			{
				name: "cross hairs",
				image: require('../../../../assets/buffs/cross_hairs.png'),
			},
			{
				name: "dump truck",
				image: require('../../../../assets/buffs/dump_truck.png'),
			},
			{
				name: "cannon",
				image: require('../../../../assets/buffs/cannon.png'),
			},
			{
				name: "monster truck",
				image: require('../../../../assets/buffs/monster_truck.png'),
			},
			{
				name: "race car",
				image: require('../../../../assets/buffs/race_car.png'),
			},
			{
				name: "rocket ship",
				image: require('../../../../assets/buffs/rocket_ship.png'),
			},
			{
				name: "shopping cart",
				image: require('../../../../assets/buffs/shopping_cart.png'),
			},
			{
				name: "slingshot",
				image: require('../../../../assets/buffs/slingshot.png'),
			},
			{
				name: "tank",
				image: require('../../../../assets/buffs/tank.png'),
			},
			{
				name: "tricycle",
				image: require('../../../../assets/buffs/tricycle.png'),
			},
		]
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', flex: 1,}}>
				<SelectionTemplate 
					title={"select buffs"}
					leftIcon={require('../../../../assets/back.png')}
					type={'buff'}
					cards={cards}


				/>
				<View style={{position:'absolute',top: 220, bottom: 0, right: 0, left: 0, zIndex: 4}}/>
				<View style={{position:'absolute',top: 0, bottom: 0, right: '33%', left: 0, zIndex: 4}}/>
				<View style={{position:'absolute',top: 0, paddingTop: 50 ,right: 0, left: 0, zIndex: 4}}/>
				<View style={{position: 'absolute', bottom: 0, right: 0, left: 0}}>
					<ProgressLoader
						step={2}
						text={"select a qb buff"}
					/>
				</View>
			</View>
		)
	}
}
		