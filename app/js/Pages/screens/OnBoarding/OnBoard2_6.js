import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import OnBoardMessage from "../../templates/OnBoardMessage"

export default class OnBoard2_6 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', flex: 1,}}>
				<OnBoardMessage 
					week={14}
					title={"you lost!"}
					titleValue={'4,000'}

					tutorial
					overButton
				/>
				<TouchableWithoutFeedback onPress={()=>{Actions.OnBoard2_7()}}>
					<View style={{position:'absolute',top: 0, bottom: 0, right: 0, left: 0}} />
				</TouchableWithoutFeedback>
			</View>
		)
	}
}
		