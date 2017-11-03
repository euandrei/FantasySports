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

export default class OnBoard4_1 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', flex: 1,}}>
				<OnBoardMessage 
					versus={{name: 'guruDAVE' , image: require("../../../../assets/heads/h_lav_right.png")}}
					bottomTitle={"final challenge"}
					bottomText={"nerf the other qb!"}

					buttonText={"ok"}
					onPress={()=>{Actions.OnBoard4_2()}}

					skip
					onSkip={()=>{Actions.OnBoard4_7()}}

					tutorial
					overButton
				/>
			</View>
		)
	}
}
		