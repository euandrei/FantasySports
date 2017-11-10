import React from 'react';
import {
    Text,
    Image,
    View,
    Dimensions
} from 'react-native';

import { colors } from "../styles";
import LineLoader from "../components/LineLoader.js"
export default class LoadingOverlay extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			index: 0,
		}
		this.increment = this.increment.bind(this);
	}
	componentDidMount(){
		setInterval( this.increment, 500);
		console.log("well")
	}

	increment(){
		console.log("fuck")
		if(this.state.index == 4 ){
			this.setState({
		    	index: 0 
		    })
		}
		else{
		    this.setState({
		    	index: this.state.index + 1 
		    })
		}
	}

	render(){
		let height = Dimensions.get('window').height;
		let width = Dimensions.get('window').width;
		return(
			<View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.marine}}>
				<Image source={require('../../../assets/logo.png')} style={{width: width/2 + 20 }}/>
				<Text style={{color: colors.white, fontSize: 24, marginTop: 50, fontWeight: 'bold'}}>FANTASY SPORTS RELOADED</Text>
				
				<View style={{height: 30,padding: 20, marginTop: 60,alignItems: 'center',justifyContent: 'center'}}>	
					<LineLoader
						active={this.state.index}
					/>
				</View>
			</View>
		)
	}
}