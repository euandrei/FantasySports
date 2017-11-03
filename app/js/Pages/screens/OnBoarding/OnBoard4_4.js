import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import TeamTemplate from "../../templates/TeamTemplate"

export default class OnBoard4_4 extends React.Component {
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
					onPress={()=>{Actions.OnBoard4_5()}}

					player1={require('../../../../assets/buffs/tank.png')}
					player2={require('../../../../assets/buffs/tank.png')}
					player3={require('../../../../assets/buffs/tank.png')}

					buff1={require('../../../../assets/buffs/tank.png')}
					buff2={require('../../../../assets/buffs/butterfly_net.png')}
					buff3={require('../../../../assets/buffs/monster_truck.png')}

					nerf1={require('../../../../assets/nerfs/pepper_spray.png')}
					nerf2={false}
					nerf3={false}

					tutorial
					overSave
				/>
				<View style={{position:'absolute',top: 50, bottom: 0, right: 0, left: 0, zIndex: 4}}/>
			</View>
		)
	}
}
		