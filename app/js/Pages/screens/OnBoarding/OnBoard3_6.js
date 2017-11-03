import React from 'react';
import {
    View,
   	TouchableWithoutFeedback
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import OnBoardMessage from "../../templates/OnBoardMessage"

export default class OnBoard3_6 extends React.Component {
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
					title={"you won!"}
					win
					titleValue={'5,000'}
					
				/>
				<TouchableWithoutFeedback onPress={()=>{Actions.OnBoard3_7()}}>
					<View style={{position:'absolute',top: 0, bottom: 0, right: 0, left: 0}} />
				</TouchableWithoutFeedback>
			</View>
		)
	}
}
		