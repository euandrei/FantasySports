import React from 'react';
import {
    View,
    TouchableWithoutFeedback
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import MatchTemplate from "../../templates/MatchTemplate"

export default class OnBoard2_5 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', flex: 1,}}>
				<MatchTemplate 
					enemyHead={require('../../../../assets/heads/h_red_right.png')}
					won={2}
					enemyName={"MARIOTAKART"}
					myDmg={"124.2"}
					enemyDmg={"248.8"}
					bet={'4,000'}
				/>
				<TouchableWithoutFeedback onPress={()=>{Actions.OnBoard2_6()}}>
					<View style={{position:'absolute',top: 0, bottom: 0, right: 0, left: 0}} />
				</TouchableWithoutFeedback>
			</View>
		)
	}
}
