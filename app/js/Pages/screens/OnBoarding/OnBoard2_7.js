import React from 'react';
import {
    View,
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
					titleValue={'4,000'}

					bottomTitle={"you lost"}
					bottomText={"power-up your team and try again!"}
					
					buttonText={"next"}
					onPress={()=>{Actions.OnBoard3_1()}}

					tutorial
					overButton
				/>
			</View>
		)
	}
}
		