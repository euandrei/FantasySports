import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView
} from 'react-native';

import TeamTemplate from "../../templates/TeamTemplate"

export default class OnBoard4_2 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', flex: 1,}}>
				<TeamTemplate 
					line
					title={"build your team"}
					leftIcon={false}
					button={"SAVE"}

					player1={require('../../../../assets/buffs/tank.png')}
					player2={require('../../../../assets/buffs/tank.png')}
					player3={require('../../../../assets/buffs/tank.png')}

					buff1={require('../../../../assets/buffs/lazer_scope.png')}
					buff2={require('../../../../assets/buffs/butterfly_net.png')}
					buff3={require('../../../../assets/buffs/monster_truck.png')}

					nerf1={false}
					nerf2={false}
					nerf3={false}

					tutorial={'OnBoard4_3'}
					overNerf
				/>
				<View style={{position:'absolute',top: 0, bottom:0, marginBottom: 150, right: 0, left: 0, zIndex: 4}}/>
				<View style={{position:'absolute',top: 0, bottom: 0, right: 0, left: '33%', zIndex: 4}}/>

			</View>
		)
	}
}
		