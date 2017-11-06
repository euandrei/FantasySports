import React from "react";
import {StyleSheet} from "react-native";

import { colors } from "./colors.js"


export const carouselStyle = StyleSheet.create({
	container:{

	},
	carouselItem:{
		backgroundColor: colors.metallicBlue50, 
		padding: 20,
		borderRadius: 8,
		height: 170,
	},
	title:{
		flex: 1,
		justifyContent: 'flex-start',
	},
	titleText:{
		fontSize: 16,
		color: colors.sunnyYellow,
		fontWeight: 'bold'
	},
	goldText:{
		fontSize: 42,
		color: colors.white,
		fontWeight: 'bold'
	},
	price:{
		flex: 1,
		justifyContent: 'flex-end',
		paddingBottom: 5,
	},
	oldPrice:{
		textDecorationLine: 'line-through',
		fontSize: 14,
		color: colors.blueyGrey,
		fontWeight: 'bold'
	},
	newPrice:{
		fontSize: 22,
		color: colors.sunnyYellow,
		fontWeight: 'bold'
	}



})