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

export default class OnBoard3_1 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', flex: 1,}}>
				<OnBoardMessage 
					versus={{name: 'MARIOTAKART' , image: require("../../../../assets/heads/h_red_right.png")}}
					bottomTitle={"let's try that again"}
					bottomText={"boost your qb!"}
					
					buttonText={"ok"}
					onPress={()=>{Actions.OnBoard3_2()}}

					skip
					onSkip={()=>{Actions.OnBoard4_7()}}

					tutorial
					overButton
				/>
				
			</View>
		)
	}
}
		