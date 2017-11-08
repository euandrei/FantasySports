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
export default class OnBoard2_3 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		let cards = [
			{
				name: "Main Player",
				image: '',
			},
			{
				name: "A.RODGERS",
				image: '',
				tutorial: "OnBoard2_4",
			},
			{
				name: "Player2",
				image: '',
			},
			{
				name: "Player3",
				image: '',
			},
			{
				name: "Player4",
				image: '',
			},
			{
				name: "Player5",
				image: '',
			},
			{
				name: "Player6",
				image: '',
			},
			{
				name: "Player7",
				image: '',
			},
			{
				name: "Player8",
				image: '',
			},
			{
				name: "Player9",
				image: '',
			},
			
		]
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', flex: 1,}}>
				<SelectionTemplate 
					main
					title={"select nerfs"}
					leftIcon={require('../../../../assets/back.png')}
					type={'player'}
					cards={cards}
				/>
				<View style={{position:'absolute',top: 370, bottom: 0, right: 0, left: 0, zIndex: 4}}/>
				<View style={{position:'absolute',top: 0, bottom: 0, right: 0, left: '33%', zIndex: 4}}/>
				<View style={{position:'absolute',top: 0, paddingTop: 50 ,right: 0, left: 0, zIndex: 4}}/>
				<View style={{position: 'absolute', bottom: 0, right: 0, left: 0}}>
					<ProgressLoader
						step={2}
						text={"select A.rodgers"}
					/>
				</View>
			</View>
		)
	}
}
		