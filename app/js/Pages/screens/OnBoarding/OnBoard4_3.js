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

export default class OnBoard4_3 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		let cards = [
			{
				name: "ball_chain",
				image: require('../../../../assets/nerfs/ball_chain.png'),
			},
			{
				name: "banana_peel",
				image: require('../../../../assets/nerfs/banana_peel.png'),
			},
			{
				name: "bear trap",
				image: require('../../../../assets/nerfs/bear_trap.png'),
			},
			{
				name: "birthday cake",
				image: require('../../../../assets/nerfs/birthday_cake.png'),
			},
			{
				name: "blind fold",
				image: require('../../../../assets/nerfs/blind_fold.png'),
			},
			{
				name: "fish",
				image: require('../../../../assets/nerfs/fish.png'),
			},
			{
				name: "handcuffs",
				image: require('../../../../assets/nerfs/handcuffs.png'),
			},
			{
				name: "high heels",
				image: require('../../../../assets/nerfs/high_heels.png'),
			},
			{
				name: "hot dog",
				image: require('../../../../assets/nerfs/hot_dog.png'),
			},
			{
				name: "ball chain",
				image: require('../../../../assets/nerfs/ball_chain.png'),
			},
			{
				name: "pepper spray",
				image: require('../../../../assets/nerfs/pepper_spray.png'),
				tutorial: "OnBoard4_4",
			},
			{
				name: "quicksand",
				image: require('../../../../assets/nerfs/quicksand.png'),
			},
		]
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', flex: 1,}}>
				<SelectionTemplate 
					title={"select nerfs"}
					leftIcon={require('../../../../assets/back.png')}
					type={'nerf'}
					cards={cards}
				/>
				<View style={{position:'absolute',top: 0, bottom: 160, right: 0, left: 0, zIndex: 4}}/>
				<View style={{position:'absolute',top: 0, bottom: 0, right: '66%', left: 0, zIndex: 4}}/>
				<View style={{position:'absolute',top: 0, bottom: 0 ,right: 0, left: '66%', zIndex: 4}}/>

			</View>
		)
	}
}
		