import React from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    View,
    Platform,
    ScrollView,
    Dimensions
} from 'react-native';

import Header from "../../Pages/components/Header";
import {Actions} from 'react-native-router-flux';

import { colors, galleryTemplateStyle } from "../styles";
import Gallery from "../components/Gallery.js";

export default class GalleryTemplate extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		let height = Dimensions.get('window').height;

		return(
			<View style={[galleryTemplateStyle.container,{minHeight: height}]}>

				<View style={galleryTemplateStyle.header}>
					<Header 
						title={"ALL PHOTOS"}
						leftIcon={require('../../../assets/back.png')}
						onBack={()=>{Actions.pop()}}

						button={"SAVE"}
						onPress={()=>{}}


					/>
				</View>
				<Gallery />
				
				
			</View>
		)
	}
}