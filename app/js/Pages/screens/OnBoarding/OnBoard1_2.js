import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import TeamTemplate from "../../templates/TeamTemplate"
import ProgressLoader from "../../components/ProgressLoader.js"
export default class OnBoard1_2 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', flex: 1,}}>
				<TeamTemplate 
					title={"your team"}
					leftIcon={false}
					button={"SAVE"}
					onPress={()=>{Actions.OnBoard1_3()}}

					player1={require('../../../../assets/buffs/tank.png')}
					player2={require('../../../../assets/buffs/tank.png')}
					player3={require('../../../../assets/buffs/tank.png')}

					buff1={false}
					buff2={false}
					buff3={false}

					nerf1={false}
					nerf2={false}
					nerf3={false}

					tutorial
					overSave
				/>
				<View style={{position:'absolute',top: 50, bottom: 0, right: 0, left: 0, zIndex: 4}}/>
				<View style={{position: 'absolute', bottom: 0, right: 0, left: 0}}>
					<ProgressLoader
						step={1}
						text={"lineup is ready. let's go!"}
					/>
				</View>
			</View>
		)
	}
}
		