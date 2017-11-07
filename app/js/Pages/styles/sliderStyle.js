import React from "react";
import {StyleSheet} from "react-native";
import { colors } from "./colors.js"

export const sliderStyle = StyleSheet.create({
	container:{
		paddingLeft: 39, 
		paddingRight: 39
	},

	sliderTitlesWrapper:{
		marginBottom: 22
	},
	sliderTopTitle:{
		fontSize: 16, 
		lineHeight: 12, 
		fontWeight: 'bold', 
		paddingBottom: 10, 
		color: colors.blueyGrey
	},
	sliderBottomTitle:{
		fontSize: 20, 
		lineHeight: 14, 
		fontWeight: 'bold', 
		color: colors.white
	},

	sliderMinMaxLabelsWrapper:{
		flex: 1, 
		flexDirection: 'row', 
		marginBottom: 13
	},
	sliderMinLabelWrapper:{
		flex: 1, 
		alignItems: 'flex-start'
	},
	minLabel:{
		fontSize: 13, 
		fontWeight: 'bold', 
		color: colors.blueyGrey
	},
	sliderMaxLabelWrapper:{
		flex: 1, 
		alignItems: 'flex-end'
	},
	maxLabel:{
		fontSize: 13, 
		fontWeight: 'bold', 
		color: colors.blueyGrey
	},

	sliderComponentsWrapper:{
		flexDirection: 'row', 
		flex: 1
	},
	sliderLeftBumper:{
		width: 10, 
		height: 44, 
		borderBottomLeftRadius: 19, 
		borderTopLeftRadius: 19,
	},
	sliderRightBumper:{
		width: 10, 
		height: 44, 
		borderBottomRightRadius: 19, 
		borderTopRightRadius: 19,
	},
	sliderWrapper:{
		flex: 1
	},
	trackStyle:{
		borderRadius: 0,
		height: 44,
	    backgroundColor: colors.darkGreyBlue,
	},
	thumbStyle:{
		borderRadius: 0,
    	width: 1,
	    height: 44,
	}

});