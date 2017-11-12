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
import GalleryTemplate from "../../templates/GalleryTemplate"

export default class GalleryScreen extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', flex: 1,}}>
				<GalleryTemplate />
			</View>
		)
	}
}