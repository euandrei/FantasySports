import React from "react";
import {StyleSheet} from "react-native";

import { colors } from "./colors.js"


export const textFieldStyle = StyleSheet.create({
	container:{
		backgroundColor: colors.darkGreyBlueBg,
		paddingLeft: 40,
		paddingTop: 12,
		paddingBottom: 15,
		paddingRight: 20,
		marginBottom: 1,
	},
	textInput:{
		flex: 1,
		padding: 0,
		paddingTop: 8,
		color: colors.blueyGrey,
		fontSize: 14,
	},
	title:{
		color: colors.blueyGrey,
		fontSize: 12,
	},
	inputWrapper:{
		flexDirection: 'row',

		alignItems: 'center',
	},
	changeButton:{
		marginLeft: 15,
		marginTop: 8,
		justifyContent: 'center',
		alignItems: 'center',
	}
})