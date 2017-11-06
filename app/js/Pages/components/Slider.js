import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView
} from 'react-native';

import { colors } from "../styles";
import RNSlider from "react-native-slider";

export default class Slider extends React.Component{ 

	render(){
		return (
			<View>
				<RNSlider
					trackStyle={{
						height: 44,
					    borderRadius: 14,
					    backgroundColor: colors.darkGreyBlue,
					}}
		            thumbStyle={{
		            	borderRadius: 14,
		            	width: 30,
					    height: 44,
					    backgroundColor: colors.neonBlue,
		            }}
		            minimumTrackTintColor={colors.neonBlue}
				/>
			</View>
		)
	}
}