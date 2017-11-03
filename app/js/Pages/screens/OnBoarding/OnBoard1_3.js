import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import MatchTemplate from "../../templates/MatchTemplate"

export default class OnBoard1_3 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', flex: 1,}}>
				<MatchTemplate 
					enemyHead={require('../../../../assets/heads/h_gry_right.png')}
					enemyName={"Bilbo2014"}
					won={1}
					myDmg={"124.2"}
					enemyDmg={"83.8"}
					bet={'4,000'}
				/>
				<TouchableWithoutFeedback onPress={()=>{Actions.OnBoard1_4()}}>
					<View style={{position:'absolute',top: 0, bottom: 0, right: 0, left: 0}} />
				</TouchableWithoutFeedback>
			</View>
		)
	}
}
