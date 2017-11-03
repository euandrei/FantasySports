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

export default class OnBoard1_1 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', flex: 1,}}>
				<OnBoardMessage 
					versus={{name: 'Bilbo2014' , image: require("../../../../assets/heads/h_gry_right.png")}}
					bottomTitle={"welcome to virtual fantasy league"}
					bottomText={"start your first game!"}
					
					buttonText={"ok"}
					onPress={()=>{Actions.OnBoard1_2()}}

					tutorial
					overButton

					skip
					onSkip={()=>{Actions.OnBoard4_7()}}
				/>
			</View>
		)
	}
}
		