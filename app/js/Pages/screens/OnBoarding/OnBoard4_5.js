import React from 'react';
import {
    View,
    TouchableWithoutFeedback
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import MatchTemplate from "../../templates/MatchTemplate"

export default class OnBoard4_5 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', flex: 1,}}>
				<MatchTemplate 
					enemyHead={require('../../../../assets/heads/h_lav_right.png')}
					won={1}
					enemyName={"guruDAVE"}
					myDmg={"316.23"}
					enemyDmg={"94.8"}
					bet={'9,000'}
				/>
				<TouchableWithoutFeedback onPress={()=>{Actions.OnBoard4_6()}}>
					<View style={{position:'absolute',top: 0, bottom: 0, right: 0, left: 0}} />
				</TouchableWithoutFeedback>
			</View>
		)
	}
}
