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
import OnBoardMessage from "../../templates/OnBoardMessage"

export default class OnBoard3_7 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', flex: 1,}}>
				<OnBoardMessage 
					
					win
					titleValue={'5,000'}

					bottomTitle={"you won"}
					bottomText={"your turn to attack!"}
					
					buttonText={"next"}
					onPress={()=>{Actions.OnBoard4_1()}}
					
					tutorial
					overButton
				/>
			</View>
		)
	}
}
		