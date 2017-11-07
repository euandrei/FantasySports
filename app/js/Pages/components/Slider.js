import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView
} from 'react-native';

import { colors, sliderStyle } from "../styles";
import RNSlider from "react-native-slider";

/*

<Slider 
	topTitle={"Top Title"}
	bottomTitle={"Bottom Title"}

	minLabel={"Something small"}
	maxLabel={"Big"}

	minimumValue={0}
	maximumValue={1}

	value={0.5}
/>

*/

export default class Slider extends React.Component{ 

	constructor(props){
		super(props);
		this.state = {
		 	value: 0,
		 	minimumValue: 0,
		 	maximumValue: 1
		}
	}

	componentWillMount(){
		const value = this.props.value || 0
		const minimumValue = this.props.minimumValue || 0
		const maximumValue = this.props.maximumValue || 1

		this.setState({ value, minimumValue, maximumValue })
	}

	render(){
		return (
			<View style={sliderStyle.container}>

				<View style={sliderStyle.sliderTitlesWrapper}>
					<Text style={sliderStyle.sliderTopTitle}>{this.props.topTitle.toUpperCase()}</Text>
					<Text style={sliderStyle.sliderBottomTitle}>{this.props.bottomTitle.toUpperCase()}</Text>
				</View>

				<View style={sliderStyle.sliderMinMaxLabelsWrapper}>
					<View style={sliderStyle.sliderMinLabelWrapper}>
						<Text style={sliderStyle.minLabel}>{this.props.minLabel.toUpperCase()}</Text>
					</View>
					<View style={sliderStyle.sliderMaxLabelWrapper}>
						<Text style={sliderStyle.maxLabel}>{this.props.maxLabel.toUpperCase()}</Text>
					</View>
				</View>

				<View style={sliderStyle.sliderComponentsWrapper}>	
					<View style={[sliderStyle.sliderLeftBumper,{backgroundColor: this.state.value == this.state.minimumValue ? colors.darkGreyBlue : colors.neonBlue,}]}></View>
					<View style={sliderStyle.sliderWrapper}>
						<RNSlider
							value={this.state.value}
	          				onValueChange={value => this.setState({ value })}
	          				minimumValue={this.state.minimumValue}
	          				maximumValue={this.state.maximumValue}

	          				thumbTouchSize={{width: 50, height: 44}}
	          				// debugTouchArea={true}
							style={{height: 44}}
							trackStyle={sliderStyle.trackStyle}
				            thumbStyle={[sliderStyle.thumbStyle,{backgroundColor: this.state.value == this.state.minimumValue ? colors.darkGreyBlue : colors.neonBlue,}]}
				            minimumTrackTintColor={colors.neonBlue}
						/>
					</View>
					<View style={[sliderStyle.sliderRightBumper,{backgroundColor: this.state.value == this.state.maximumValue ? colors.neonBlue : colors.darkGreyBlue,}]}></View>
				</View>

				
			</View>
		)
	}
}